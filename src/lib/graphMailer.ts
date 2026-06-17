// Versand über Microsoft Graph (OAuth2 / Client Credentials).
// Erfordert eine App-Registrierung in Entra mit Application-Permission "Mail.Send".

export const graphRequiredEnvVars = [
  "GRAPH_TENANT_ID",
  "GRAPH_CLIENT_ID",
  "GRAPH_CLIENT_SECRET",
  "MAIL_FROM"
] as const;

type MailInput = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  const tenant = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  if (!tenant || !clientId || !clientSecret) {
    throw new Error("Graph mail is not configured (GRAPH_TENANT_ID / GRAPH_CLIENT_ID / GRAPH_CLIENT_SECRET).");
  }

  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials"
  });

  const response = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Token request failed (${response.status}): ${detail}`);
  }

  const data = (await response.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000
  };

  return cachedToken.value;
}

export async function sendMail({ to, subject, text, replyTo }: MailInput): Promise<void> {
  const sender = process.env.MAIL_FROM;
  if (!sender) {
    throw new Error("MAIL_FROM is not configured.");
  }

  const token = await getAccessToken();

  const message: Record<string, unknown> = {
    subject,
    body: { contentType: "Text", content: text },
    toRecipients: [{ emailAddress: { address: to } }]
  };

  if (replyTo) {
    message.replyTo = [{ emailAddress: { address: replyTo } }];
  }

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message, saveToSentItems: false })
    }
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Graph sendMail failed (${response.status}): ${detail}`);
  }
}
