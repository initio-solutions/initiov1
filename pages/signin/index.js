import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Router.push("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    if (response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", email);
      localStorage.setItem("role", response.role);
      if (response.role == 0) {
        Router.push("/admin").then(() => window.location.reload());
      } else {
        Router.push("/dashboard").then(() => window.location.reload());
      }
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-gray-600 body-font relative">
        <Head>
          <title>Sign In | Initio Solutions</title>
        </Head>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign in
            </h1>
          </div>
          <div className="p-2 w-1/2 mx-auto">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2  mx-auto">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg"
            >
              Sign in
            </button>
          </div>
          <div className="p-2 w-1/2 mx-auto text-center">
            <h2 className="sm:text-lg text-xl text-gray-900">
              Don&rsquo;t have an account?{" "}
              <Link className="text-yellow-400" href="/signup">
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Signin;
