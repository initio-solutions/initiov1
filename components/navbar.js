"use client";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import Logo from "./logo";
function Navbar() {
  const [signin, setSignin] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setSignin(true);
    } else {
      setSignin(false);
    }
  }, [signin]);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    Router.push("/");
    Router.reload();
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/careers" className="mr-5 hover:text-gray-900">
            Careers
          </Link>
          <Link href="/past-work" className="mr-5 hover:text-gray-900">
            Past Work
          </Link>
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
        </nav>
        <Link
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 items-center text-gray-900 lg:items-center lg:justify-center "
        >
          <Logo size="15%" />
          {/* <img src={logo.src} width="55%" /> */}
        </Link>
        <div className="lg:w-2/5 inline-flex items-center lg:justify-end ml-5 lg:ml-0">
          {signin ? (
            <>
              <Link href="/dashboard" className="hover:text-gray-900 mr-4">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="mr-4 text-lg hover:text-gray-900"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => Router.push("/signin")}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Sign in
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}

          <Link href="/contact" className="hover:text-gray-900 ml-2">
            Contact
          </Link>
        </div>
      </div>
      <hr className="mx-14" />
    </header>
  );
}

export default Navbar;
