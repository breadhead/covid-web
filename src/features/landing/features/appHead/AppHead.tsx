import Head from 'next/head';
import React from 'react';

import { description, keywords, SHARE_IMAGE } from '../../../common/seo/SEO';
export const AppHead = (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial=scale=1" />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="description" content={description} />
    <link rel="canonical" href="https://defeatcovid.ru/" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/images/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/images/favicons/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/static/images/favicons/android-chrome-512x512.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/images/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/images/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/images/favicons/site.webmanifest" />

    <meta name="msapplication-TileColor" content="#ffc40d" />
    <meta name="theme-color" content="#ffffff" />
    <meta
      property="og:title"
      content="ЧТО ДЕЛАТЬ | Система борьбы с инфекцией COVID-19"
    />
    <meta property="og:site_name" content={props.publicRuntimeConfig.siteUrl} />
    <meta property="og:url" content={props.publicRuntimeConfig.siteUrl} />
    <meta
      property="og:description"
      content="Отвечаем на вопросы, помогаем врачам и больницам"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content={`${props.publicRuntimeConfig.siteUrl}${SHARE_IMAGE}`}
    />
    <meta
      property="og:image:secure_url"
      content={`${props.publicRuntimeConfig.siteUrl}${SHARE_IMAGE}`}
    />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />
    <meta
      property="og:image:alt"
      content="ЧТО ДЕЛАТЬ | Система борьбы с инфекцией COVID-19"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="ЧТО ДЕЛАТЬ | Система борьбы с инфекцией COVID-19"
    />
    <meta
      name="twitter:description"
      content="Отвечаем на вопросы, помогаем врачам и больницам"
    />
    <meta
      name="twitter:image"
      content={`${props.publicRuntimeConfig.siteUrl}${SHARE_IMAGE}`}
    />
    <meta
      name="twitter:image:alt"
      content="ЧТО ДЕЛАТЬ | Система борьбы с инфекцией COVID-19"
    />
    <meta
      name="vk:image"
      content={`${props.publicRuntimeConfig.siteUrl}${SHARE_IMAGE}`}
    />
    <meta property="fb:306467899461959" content="306467899461959" />
  </Head>
);
