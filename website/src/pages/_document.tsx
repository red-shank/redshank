import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

const metaInfo = {
  url: 'https://www.redshank.app',
  author: 'Kevin Rivas',
  description:
    '@redshank/native Framework Component for React Native create your apps in React Native in a simple, fast and beautiful way.',
  imgs: {
    shared: 'https://www.redshank.app/shared.png',
    favicon: '/favicon.ico',
    favicon16: '/favicon-16x16.png',
    favicon32: '/favicon-32x32.png',
    favicon192: '/android-chrome-192x192.png',
    favicon512: '/android-chrome-512x512.png',
    faviconApple: '/apple-touch-icon.png'
  }
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta charSet="utf-8" />

          {/* default preferences */}
          <meta name="author" content={metaInfo.author} />
          <meta property="title" content={metaInfo.author} />
          <meta property="type" content="profile" />
          <meta property="site_name" content={metaInfo.author} />
          <meta property="description" content={metaInfo.description} />
          <meta title="image" content={metaInfo.imgs.shared} />

          {/* Open Graph preferences */}
          <meta name="og:author" content={metaInfo.author} />
          <meta property="og:type" content="profile" />
          <meta property="og:site_name" content={metaInfo.author} />
          <meta property="og:url" content={metaInfo.url} />
          <meta property="og:title" content={metaInfo.author} />
          <meta property="og:image" content={metaInfo.imgs.shared} />
          <meta property="og:description" content={metaInfo.description} />

          {/* Twitter */}
          <meta name="twitter:author" content={metaInfo.author} />
          <meta property="twitter:type" content="profile" />
          <meta property="twitter:site_name" content={metaInfo.author} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={metaInfo.url} />
          <meta property="twitter:title" content={metaInfo.author} />
          <meta property="twitter:description" content={metaInfo.description} />
          <meta property="twitter:image" content={metaInfo.imgs.shared} />

          {/* Dropdown rendering engine order  */}
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />

          {/* links canonical */}
          <link rel="canonical" href={metaInfo.url} />
          <link
            rel="alternate"
            type="application/json+oembed"
            href={metaInfo.url}
          />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href={metaInfo.imgs.faviconApple}
          />
          <link
            rel="icon"
            type="image/png"
            href={metaInfo.imgs.favicon192}
            sizes="128x128"
          />
          <link
            rel="icon"
            type="image/png"
            href={metaInfo.imgs.favicon192}
            sizes="192x192"
          />
          <link rel="icon" href={metaInfo.imgs.favicon} type="image/png" />

          <meta
            name="keywords"
            content="react-native, React Native, npm, docs, beauty-design, @redshank, redshank, @redshank/native, redshank/native react, native beauty-design, beauty design, provider, title, button, tabs, cards, api"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
