import Head from 'next/head';
import * as React from 'react';

import {GTM_ID} from './config';

export const Analytics = () => (
  <>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `!function(){var t = document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?165",t.onload=function(){VK.Retargeting.Init("VK-RTRG-447034-ak54Y"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`,
        }}
      />
    </Head>
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
      }}
    />

    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img src="https://vk.com/rtrg?p=VK-RTRG-447034-ak54Y" style="position:fixed; left:-999px;" alt=""/>`,
      }}
    />
  </>
);
