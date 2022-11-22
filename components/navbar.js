"use client";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
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
    Router.push("/");
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
          <Link href="/past-work" className="hover:text-gray-900">
            Past Work
          </Link>
        </nav>
        <Link
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Initio Solutions</span>
        </Link>
        <div className="lg:w-2/5 inline-flex items-center lg:justify-end ml-5 lg:ml-0">
          {signin ? (
            <button onClick={logout} className="mr-5 hover:text-gray-900">
              Logout
            </button>
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
    </header>
  );
}

export default Navbar;
