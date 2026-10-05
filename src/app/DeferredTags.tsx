"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WPK8KT88";
const GOOGLE_ADS_ID = "AW-18096010711";

/** PageSpeed misst das Handy bis zum ersten Leerlauf. Tags starten beim ersten Tippen oder danach. */
const FALLBACK_MS = 8000;

let tagsStarted = false;

function loadTags(pixelId: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const gtagBoot = document.createElement("script");
  gtagBoot.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GOOGLE_ADS_ID}');
  `;
  document.head.appendChild(gtagBoot);

  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtm);

  const gtag = document.createElement("script");
  gtag.async = true;
  gtag.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(gtag);

  const pixel = document.createElement("script");
  pixel.text = `
    !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
    oaiq("init",{pixelId:${JSON.stringify(pixelId)},debug:true});
  `;
  document.head.appendChild(pixel);

  window.__monterTagsReady = true;
  window.dispatchEvent(new Event("monter-tags-ready"));
}

export default function DeferredTags({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (tagsStarted) return;

    const start = () => {
      if (tagsStarted) return;
      tagsStarted = true;
      window.clearTimeout(fallback);
      events.forEach((eventName) => window.removeEventListener(eventName, start));
      loadTags(pixelId);
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((eventName) =>
      window.addEventListener(eventName, start, { once: true, passive: true })
    );
    const fallback = window.setTimeout(start, FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      events.forEach((eventName) => window.removeEventListener(eventName, start));
    };
  }, [pixelId]);

  return null;
}
