"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { GA_ID, GTM_ID, FB_PIXEL_ID, TIKTOK_PIXEL_ID, CLARITY_ID } from "@/lib/pixel-ids";

// Pixels are deferred until the first real user signal — whichever comes
// first of: scroll / pointer / keypress, the page becoming hidden, or a
// 15-second fallback. This keeps Core Web Vitals clean under Lighthouse
// while still capturing real visitor data.
const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "pointermove",
  "keydown",
  "touchstart",
] as const;
const FALLBACK_DELAY_MS = 15000;

export function Analytics() {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (armed) return;

    const fire = () => setArmed(true);

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") fire();
    };

    const timeoutId = window.setTimeout(fire, FALLBACK_DELAY_MS);
    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, fire, { passive: true, once: true }),
    );
    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, fire));
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [armed]);

  return (
    <>
      {armed && (
        <>
          {/* Google Tag Manager */}
          {GTM_ID && (
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
          )}

          {/* Google Analytics 4 */}
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga4" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
                gtag('js',new Date());gtag('config','${GA_ID}');`}
              </Script>
            </>
          )}

          {/* Facebook / Meta Pixel */}
          {FB_PIXEL_ID && (
            <Script id="fb-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
            </Script>
          )}

          {/* TikTok Pixel */}
          {TIKTOK_PIXEL_ID && (
            <Script id="tiktok-pixel" strategy="afterInteractive">
              {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=['page','track','identify','instances','debug','on','off','once',
              'ready','alias','group','enableCookie','disableCookie'];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.load=function(e,n){var r='https://analytics.tiktok.com/i18n/pixel/events.js';
              ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};
              ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};
              n=d.createElement('script');n.type='text/javascript';n.async=!0;
              n.src=r+'?sdkid='+e+'&lib='+t;var s=d.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(n,s)};
              ttq.load('${TIKTOK_PIXEL_ID}');ttq.page();}(window,document,'ttq');`}
            </Script>
          )}

          {/* Microsoft Clarity (heatmaps + session recordings) */}
          {CLARITY_ID && (
            <Script id="clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${CLARITY_ID}");`}
            </Script>
          )}
        </>
      )}

      {/* GTM noscript fallback */}
      {GTM_ID && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}
