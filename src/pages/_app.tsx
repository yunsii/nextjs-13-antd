import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { loadCatalog, useLinguiInit } from "@/i18n";

function App({ Component, pageProps, translation }: AppProps & Awaited<ReturnType<typeof App.getInitialProps>>) {
  useLinguiInit(translation);

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

App.getInitialProps = async (appCtx: AppContext) => {
  const defaultLocale = "en-US";
  const locale =
    appCtx.ctx.locale || (typeof window === "undefined" ? defaultLocale : window.__NEXT_DATA__.locale || defaultLocale);
  const translation = await loadCatalog(locale);
  return {
    translation,
  };
};

export default App;
