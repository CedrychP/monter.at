import type { Metadata } from "next";
import Link from "next/link";
import { buildEnglishMetadata } from "../../pageMetadata";
import { siteConfig } from "../../siteConfig";
import { EnglishFrame, EnglishProse } from "../EnglishFrame";

export const metadata: Metadata = buildEnglishMetadata({
  title: "Privacy | MONTER Repair Vienna",
  description:
    "How MONTER stores customer and website data: the repair file, forms, cookies, consent, retention and your rights. The full notice is also in German.",
  path: "/en/privacy"
});

export default function EnglishPrivacyPage() {
  return (
    <EnglishFrame
      eyebrow="Privacy"
      title="What we store, and why."
      lede="This is the same privacy notice as the German page, in English. The controller, the periods and the rights below are the ones published there."
    >
      <EnglishProse>
        <p>
          The controller for this website and for the customer file is the legal entity named in the{" "}
          <Link href="/impressum" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            imprint
          </Link>
          . The brand is {siteConfig.serviceName}. No data-protection officer is appointed. That is not required for this business. Privacy requests go to{" "}
          <a href="mailto:datenschutz@monter.at" className="border-b border-current">
            datenschutz@monter.at
          </a>{" "}
          or to {siteConfig.phoneDisplay}.
        </p>
        <p>
          We process personal data to carry out repairs and to run this website. We do not sell data, and we do not use it for automated decisions that have a legal effect on you. Two areas are separate: the customer file, once a request becomes an order, and the visit to this website, including forms, cookies and, only with consent, statistics and advertising.
        </p>
        <h2 className="font-display pt-4 text-2xl font-light">The customer file and enquiries</h2>
        <p>
          An order stores the name, phone number, email, the address of the visit, the customer type, a company name where there is one, the appliance, the brand or model, the fault, the appointment, the work done, the parts fitted, the invoice amount and the way it was paid. Photos you send, for example of the rating plate, belong to the same file. The basis is the contract, or the steps before a contract. Invoices are also kept because tax law requires it.
        </p>
        <p>
          Forms on the site ask, depending on the form, for a name, phone, email, address, appliance and message. The message is emailed to us through Microsoft 365. There is no separate customer database on the website. If the enquiry becomes an order, the details needed for it move into the customer file. Calls are not recorded. Card numbers are not stored on this website. Card payment runs on the terminal at the visit.
        </p>
        <p>
          To limit automated form spam, the IP address of a submission is held for at most ten minutes, in the memory of that server instance, and is not written to a file.
        </p>
        <h2 className="font-display pt-4 text-2xl font-light">How long</h2>
        <p>
          An enquiry that does not become an order is deleted once it has been answered and nothing is still open, and at the latest six months after the last message. The customer file for an order is kept for the job and for three years after it ends. Invoices and other bookkeeping records are kept for seven years. The seven years start at the end of the calendar year of the last entry. Applications are kept for the selection and for six months after it ends, unless you agree to longer storage or a case is open. A newsletter address is deleted when you withdraw consent. Proof that the consent existed is kept for three years.
        </p>
        <h2 className="font-display pt-4 text-2xl font-light">Cookies, statistics and advertising</h2>
        <p>
          Necessary cookies and one entry in local storage are set without advertising consent. Statistics and marketing stay off until you accept them in the banner. You can change that choice later under cookie settings in the German footer. The local-storage key monter-cookie-consent records the choice so we do not ask on every visit.
        </p>
        <p>
          The cookie monter_ad_source remembers for 90 days only whether a visit came from a Meta or ChatGPT ad, so the phone number that belongs to that ad can be shown. It is not your name. A ChatGPT ad can also set monter_oppref for 90 days. That click id is used only if you have accepted marketing.
        </p>
        <p>
          If you accept statistics, we load Google Analytics 4 and Vercel Web Analytics. If you accept marketing, we load Google Tag Manager, which can start Google Ads, the Meta pixel and Microsoft Clarity, and we load the OpenAI pixel used for ChatGPT ads. Clarity can record how a page is used, including mouse movement, clicks and scrolling. After a form or a call, the email and phone number can be sent to Google and to OpenAI’s conversion interface in a shortened, hashed form, together with the page, the IP address and the browser type. The plain-text email stays with us. Without marketing consent none of those tags run.
        </p>
        <p>
          Microsoft, Google, Vercel, Meta and OpenAI can process data in the United States. Where the provider is certified under the EU-US Data Privacy Framework, the transfer relies on that. The providers also use the European Commission’s standard contractual clauses. Advertising and statistics transfers happen only with the matching consent. Form email goes through Microsoft 365 because we could not answer the enquiry otherwise.
        </p>
        <h2 className="font-display pt-4 text-2xl font-light">Your rights</h2>
        <p>
          You can ask for access, correction, deletion, restriction and portability, and you can withdraw consent for the future. Where processing is based on a legitimate interest, you can object. Write to datenschutz@monter.at. Withdrawal does not affect processing that was lawful up to that point. Records we still have to keep by law, such as invoices, are deleted only when that period ends. Until then their use is limited to that purpose.
        </p>
        <p>
          You can complain to the Austrian data protection authority, Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna,{" "}
          <a href="https://www.dsb.gv.at" className="border-b border-current">
            www.dsb.gv.at
          </a>
          . You do not have to write to us first.
        </p>
        <p>
          A name, a way to reach you and the address are required for a visit. The website itself can be read without a form and without statistics or marketing consent. Texts on this site were prepared with the help of an AI system and checked before publication. There is no chatbot. Form entries, calls and the customer file are not put into a generative AI system. The OpenAI ad pixel is separate and only measures, after marketing consent, whether a ChatGPT ad led to an enquiry.
        </p>
        <p>
          The full notice, section by section, is the German page.{" "}
          <Link href="/dsgvo" hrefLang="de-AT" lang="de-AT" className="border-b border-current">
            Datenschutz
          </Link>
        </p>
      </EnglishProse>
    </EnglishFrame>
  );
}
