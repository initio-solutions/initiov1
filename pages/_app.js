import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
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
  }, [router.events]);
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
