import Link from "next/link";
import Head from "next/head";
import four from "../assets/404.png";
import { motion } from "framer-motion";
export default function FourOhFour() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen"
    >
      <Head>
        <title>404 | Initio Solutions</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center justify-items-center h-full">
        <img alt="404" className="w-1/4 md:w-1/12" src={four.src} />
        <div className="flex flex-col items-center align-center">
          <h1 className="text-center">404 - Page Not Found</h1>
          <br />
          <Link href="/">Go back home</Link>
        </div>
      </div>
    </motion.div>
  );
}
