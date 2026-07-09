const defaultSiteUrl = "https://www.monter.at";

export const siteConfig = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? defaultSiteUrl).replace(
    /\/$/,
    ""
  ),
  serviceName: "MONTER Reparatur & Service",
  companyName: "Tech Craft Consulting GmbH",
  address: {
    street: "Rappgasse 1/6",
    postalCode: "1210",
    city: "Wien",
    country: "AT"
  },
  email: "info@monter.at",
  phoneDisplay: "01 4171346",
  phoneHref: "+4314171346",
  // WhatsApp-fähige Nummer im internationalen Format ohne "+", Leerzeichen oder Bindestriche.
  // TODO: Durch echte WhatsApp-Business-Nummer ersetzen (aktuell Platzhalter = Festnetz).
  whatsappNumber: "4314171346",
  whatsappDisplay: "01 4171346",
  vatId: "ATU82408379",
  social: {
    instagram: "https://www.instagram.com/monteraustria/",
    facebook: "https://www.facebook.com/profile.php?id=61591989052807",
    tiktok: "https://www.tiktok.com/@monteraustria",
    youtube: "https://www.youtube.com/channel/UCxdJa9hKrTdIKMZN_LG9dFg",
    linkedin: "https://www.linkedin.com/company/monter-austria"
  },
  googleReviewsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJ9S11rAulWKgRdQLAhpk4EPc",
  googleReviewWriteUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ9S11rAulWKgRdQLAhpk4EPc"
};
