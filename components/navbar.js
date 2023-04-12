import Link from "next/link";
import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [signin, setSignin] = useState(false);
  const headerRef = useRef(null);
  const [role, setRole] = useState(4);
  const [breadcrumbMenuOpen, setBreadcrumbMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let r = localStorage.getItem("role");
    setRole(r);
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
  const toggleBreadcrumbMenu = () => {
    setBreadcrumbMenuOpen(!breadcrumbMenuOpen);
  };
  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/past-work", label: "Past Work" },
    { href: "/products", label: "Products" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Link href={item.href} className="mr-5 hover:text-gray-900">
          {item.label}
        </Link>
      </motion.div>
    ));
  };
  return (
    <>
      <header ref={headerRef} className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
          >
            {renderMenuItems()}
          </nav>
          <Link
            aria-label="Home"
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 w-1/2 items-center text-gray-900 lg:items-center lg:justify-center "
          >
            <Logo size="35%" />
          </Link>

          <div className="lg:hidden">
            <button
              aria-label={
                breadcrumbMenuOpen
                  ? "Close breadcrumb menu"
                  : "Open breadcrumb menu"
              }
              aria-expanded={breadcrumbMenuOpen ? "true" : "false"}
              onClick={toggleBreadcrumbMenu}
              className="flex items-center focus:outline-none"
            >
              {breadcrumbMenuOpen ? (
                <FiX size={24} className="text-gray-900" />
              ) : (
                <FiMenu size={24} className="text-gray-900" />
              )}
            </button>
          </div>

          <div className="lg:w-2/5 inline-flex items-center content-center lg:justify-end ml-5 lg:ml-0">
            {signin && role == 1 ? (
              <>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Link href="/dashboard" className="hover:text-gray-900 mr-4">
                    Dashboard
                  </Link>
                </motion.div>
                <button
                  onClick={logout}
                  className="mr-4 text-lg hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : signin && role == 0 ? (
              <>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Link href="/admin" className="hover:text-gray-900 mr-4">
                    Admin
                  </Link>
                </motion.div>
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
            <motion.div
              className="mt-auto"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href="/contact" className="hover:text-gray-900 ml-2">
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
        <hr className="mx-14" />
      </header>
      {mobileView && (
        <motion.div
          aria-label="Mobile navigation"
          style={{
            top: headerRef.current?.offsetHeight || "64px",
          }}
          className={`w-full p-4 flex flex-col items-center gap-4 fixed left-0 bg-white z-20 ${
            breadcrumbMenuOpen ? "visible" : "invisible"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderMenuItems()}
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
