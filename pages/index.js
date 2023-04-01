import CountUp from "react-countup";
import Head from 'next/head';
import hi from "../assets/hi.png";
import website from "../assets/website.png";
import app from "../assets/app.png";
import seo from "../assets/seo.png";
import socialmedia from "../assets/socialmedia.png";
import content from "../assets/content.png";
import data from "../assets/data.png";
import dataentry from "../assets/dataentry.png";
import graphic from "../assets/graphic.png";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Page() {
  const route = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Initio Solutions</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div
          style={{ backgroundColor: "#3581b8" }}
          className=" mx-auto flex md:flex-row flex-col px-5 py-12 items-center justify-center"
        >
          <img
            className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={hi.src}
          />
          <div className="text-center text-white lg:w-2/3 w-full">
            <h1 className="sm:text-4xl text-6xl mb-4 font-extrabold">
              The Technology Pioneer.
            </h1>
            <p className="mb-8 leading-relaxed">
              We are specialists in web and app solutions that aim to transform
              new concepts into a driving force for your company. With us, you
              can turn any idea into a reality.
            </p>
            <div className="flex justify-center">
              <Link
                target="_blank"
                href="https://calendly.com/initiosolutions/30min"
                className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg"
              >
                Book a call
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  route.push("/contact");
                }}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="ml-10 mr-10" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-2 sm:w-1/4 w-full sm:border-r-2">
              <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={25} />
              </h2>
              <p className="leading-relaxed">Customers</p>
            </div>

            <div className="sm:p-2 p-4 sm:w-1/4 w-full sm:border-r-2">
              <h2 className=" font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={25689} />
              </h2>
              <p className="leading-relaxed">Lines of Code</p>
            </div>

            <div className="sm:p-2 p-4 sm:w-1/4 w-full sm:border-r-2">
              <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={32} />
              </h2>
              <p className="leading-relaxed">Websites</p>
            </div>

            <div className="sm:p-2 p-4 sm:w-1/4 w-full">
              <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={4} />
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="ml-10 mr-10" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-3">Services</h1>
          <div className="flex flex-wrap -m-4">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                route.push("/services/website");
              }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={website.src}
                />
              </a>
              <div className="mt-4 text-center">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Web development
                </h2>
                {/* <p className="mt-1">$16.00</p> */}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={app.src}
                />
              </a>
              <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  App development
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={seo.src}
                />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  SEO
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={socialmedia.src}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Social media marketing
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={content.src}
                />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Content writing
                </h2>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={data.src}
                />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cloud and Data
                </h2>
                {/* <p className="mt-1">$21.15</p> */}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={dataentry.src}
                />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Data Entry
                </h2>
                {/* <p className="mt-1">$12.00</p> */}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ cursor: "pointer" }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={graphic.src}
                />
              </a>
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Graphic Design
                </h2>
                {/* <p className="mt-1">$18.40</p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <hr className="ml-10 mr-10" />
      <section
        style={{ backgroundColor: "#F3F8F2" }}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Worked with Initio for a website and was very impressed by the
                  user-friendly design and helpful information it provided. The
                  site was easy to navigate and I was able to find what I was
                  looking for quickly and easily. The customer service was also
                  top-notch I had a few questions and the staff was very
                  responsive and helpful. Overall, I had a great experience on
                  the website and would definitely recommend it to others.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://acaa.org.uk/wp-content/uploads/2021/06/director-message@2x.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Darius
                    </span>
                    <span className="text-gray-500 text-sm">
                      Afghanistan and Central Asian Association
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Recently worked with a marketing team that implemented a
                  fantastic marketing technique. They created a personalized
                  email campaign that targeted specific customers based on their
                  purchase history and interests which resulted in a significant
                  increase in sales and customer engagement and was impressed by
                  the level of detail and effort that went into this campaign,
                  and it clearly paid off.Would highly recommend this marketing
                  technique to any business looking to improve their customer
                  relationships and boost their sales.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://media-exp1.licdn.com/dms/image/C560BAQE0jrAuedF8TA/company-logo_200_200/0/1642501577232?e=2147483647&v=beta&t=6vdEF5Ibsk7yFYkzyHvCkynVe_7hFOVcWIpkyKiwgGM"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Influencer.in
                    </span>
                    <span className="text-gray-500 text-sm">Social beat</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="ml-10 mr-10" />
      <section className="text-white bg-secondary body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-white">
              Pricing Tiers
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500">
              Customisable package for your needs.
            </p>
            {/* <div className="flex mx-auto border-2 border-yellow-200 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-primary text-black focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div className="h-full p-6 bg-white rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm text-gray-700 tracking-widest mb-1 font-medium">
                  STARTER
                </h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Basic
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Portfolio Site
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Contact us and Blog
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Affiliate Links and Emails
                </p>
                {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button> */}
                {/* <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven &apos; t heard of them jean
                  shorts.
                </p> */}
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 bg-white border-yellow-200 flex flex-col relative overflow-hidden">
                <span className="bg-primary text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest text-gray-700 mb-1 font-medium">
                  ECOMMERCE
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Pro</span>
                  {/* <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span> */}
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Registration and Cart
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tracking and payment gateway
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Emails and Customer care
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Product data entry
                </p>
                {/* <button className="flex items-center mt-auto text-white bg-yellow-200 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button> */}
                {/* <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven &apos; t heard of them jean
                  shorts.
                </p> */}
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 bg-white border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-700 mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Enterprise</span>
                  {/* <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span> */}
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Inhouse tech products
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  CMS and database integration
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Social media marketing and SEO
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Data Encryption and Analytics
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Adwords and Branding
                </p>
                {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button> */}
                {/* <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven &apos; t heard of them jean
                  shorts.
                </p> */}
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 bg-white rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm text-gray-700 tracking-widest mb-1 font-medium">
                  SPECIAL
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Custom</span>
                  {/* <span className="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span> */}
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Customised Products
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Overall site and app maintanence
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  24/7 customer care
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mobile app integration
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Automation and AI integration
                </p>
                {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button> */}
                {/* <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven &apos; t heard of them jean
                  shorts.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ml-10 mr-10" />
      <section className="bg-blue-100 bg-opacity-50 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Get in touch with us to know More!!
            </h2>
            <button
              onClick={() => route.push("/contact")}
              className="flex-shrink-0 text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-200 rounded text-lg mt-10 sm:mt-0"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
