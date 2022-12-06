import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
function MyApp({ Component, pageProps }) {
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
