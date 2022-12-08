import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import { useEffect } from "react";
import Router from "next/router";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.PIXEL);
        ReactPixel.pageView();
        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [Router.events]);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ScrolltoTop />
      <Footer />
    </>
  );
}

export default MyApp;
