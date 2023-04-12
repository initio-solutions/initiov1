import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "./logo";
function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Logo size="2%" />
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Initio Solutions
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            target="_blank"
            href="https://instagram.com/initiosolutions"
            className="ml-3 text-gray-500"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/initiosolutions/"
            className="ml-3 text-gray-500"
            aria-label="Visit our LinkedIn page"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
