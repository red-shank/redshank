import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { metadata } from '@/config/metadata';


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta charSet="utf-8" />

          {/* default preferences */}
          <meta name="author" content={metadata.author} />
          <meta property="title" content={metadata.title} />
          <meta property="type" content="profile" />
          <meta property="site_name" content={metadata.title} />
          <meta property="description" content={metadata.description} />
          <meta title="image" content={metadata.imgs.shared} />

          {/* Open Graph preferences */}
          <meta name="og:author" content={metadata.author} />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content={metadata.url} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:site_name" content={metadata.title} />
          <meta property="og:image" content={metadata.imgs.shared} />
          <meta property="og:description" content={metadata.description} />

          {/* Twitter */}
          <meta name="twitter:author" content={metadata.author} />
          <meta property="twitter:type" content="profile" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={metadata.url} />
          <meta property="twitter:site_name" content={metadata.title} />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.description} />
          <meta property="twitter:image" content={metadata.imgs.shared} />

          {/* Dropdown rendering engine order  */}
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />

          {/* links canonical */}
          <link rel="canonical" href={metadata.url} />
          <link
            rel="alternate"
            type="application/json+oembed"
            href={metadata.url}
          />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href={metadata.imgs.faviconApple}
          />
          <link
            rel="icon"
            type="image/png"
            href={metadata.imgs.favicon192}
            sizes="128x128"
          />
          <link
            rel="icon"
            type="image/png"
            href={metadata.imgs.favicon192}
            sizes="192x192"
          />
          <link rel="icon" href={metadata.imgs.favicon} type="image/png" />

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
