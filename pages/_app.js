import "../styles/globals.css";
import "../styles/transparentcard.css";
import Navbar from "../components/navbar";
import Assistant from "../components/assistant/Assistant";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.PIXEL);
        ReactPixel.pageView();
        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FDS30ES3BJ"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
      gtag('config', 'G-FDS30ES3BJ', {
     page_path: window.location.pathname,
     });
     `,
        }}
      />
      <Navbar />
      <Assistant />
      <Component {...pageProps} />
      {/* <ScrolltoTop /> */}
      <Footer />
    </>
  );
}

export default MyApp;
