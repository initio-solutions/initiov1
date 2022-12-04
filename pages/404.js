import Link from "next/link";
import Head from "next/head";
import four from "../assets/404.png";
export default function FourOhFour() {
  return (
    <div className="h-screen">
      <Head>
        <title>404 | Initio Solutions</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center justify-items-center h-full">
        <img className="w-1/4 md:w-1/12" src={four.src} />
        <div className="flex flex-col items-center align-center">
          <h1 className="text-center">404 - Page Not Found</h1>
          <br />
          <Link href="/">Go back home</Link>
        </div>
      </div>
    </div>
  );
}
