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
          © 2022 Initio Solutions
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <FaFacebookF className="text-2xl" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaTwitter className="text-2xl" />
          </a>
          <Link
            target="_blank"
            href="https://instagram.com/initiosolutions"
            className="ml-3 text-gray-500"
          >
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/initiosolutions"
            className="ml-3 text-gray-500"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
