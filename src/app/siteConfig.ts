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
    "https://search.google.com/local/writereview?placeid=ChIJ9S11rAulWKgRdQLAhpk4EPc",
  /** Aus dem Google-Unternehmensprofil, Rappgasse 1/6, 1210 Wien. */
  geo: {
    latitude: 48.2684967,
    longitude: 16.3925317
  },
  /** Schema.org-Format, identisch mit Google Maps. */
  openingHours: ["Mo-Fr 07:00-18:00"],
  openingHoursDisplay: [
    "Montag–Freitag: 07:00–18:00 Uhr",
    "Samstag und Sonntag: geschlossen"
  ]
};

/** Stabile JSON-LD-ID — Service-Seiten verweisen darauf statt LocalBusiness zu kopieren. */
export const localBusinessId = `${siteConfig.siteUrl}/#localbusiness`;

export const localBusinessProviderRef = {
  "@id": localBusinessId
};
