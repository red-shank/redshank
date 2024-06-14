import '@/styles/global.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Analytics } from '@vercel/analytics/react';

import { darkTheme, lightTheme } from '@/styles/stitches.config';
import menuComponents from '@/versions/v1.json';
import { ComponentProvider, ComponentProps } from '@/context/components';

function MyApp({ Component, pageProps }: AppProps) {
  const [componentList, setComponentList] = useState<ComponentProps[]>([]);

  useEffect(() => {
    try {
      menuComponents.forEach((item) => {
        if (item.children) {
          setComponentList((prev) => {
            return [...prev, ...item.children];
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Redshank</title>
      </Head>
      <ComponentProvider items={componentList}>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
          }}
        >
          <NextUIProvider>
            <Component {...pageProps} />
            <Analytics />
          </NextUIProvider>
        </ThemeProvider>
      </ComponentProvider>
    </>
  );
}

export default MyApp;
