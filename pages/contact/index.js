import { useState } from "react";
import Head from "next/head";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            setSent(true);
            setName("");
            setEmail("");
            setMessage("");
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="text-gray-600 body-font relative">
      <Head>
        <title>Contact | Initio Solutions</title>
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We will get back in touch ASAP
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg"
              >
                Submit
              </button>
            </div>
            {sent && (
              <div className="bg-green-200 border-green-500 border p-2 rounded flex text-center mx-auto">
                <TiTick className=" text-2xl rounded mr-2" />
                <p className="text-base">
                  Your Response has been sent successfully!
                </p>
              </div>
            )}
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto: support@initiosolutions.com" className="primary">
                support@initiosolutions.com
              </a>
              <p className="leading-normal my-5">
                Liverpool
                <br />
                United Kingdom
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <FaFacebookF />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaTwitter />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaInstagram />
                </a>
                <a className="ml-4 text-gray-500">
                  <FaLinkedin />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
