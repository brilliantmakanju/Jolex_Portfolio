import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localstorage.theme === 'dark' || (!('theme' in localstorage) && window.matchMedia('preferDarkQuery'))){
            document.documentElement.add('dark')
          }else{
            document.documentElement.remove('dark')
          }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
