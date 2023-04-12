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
import Pricing from "../components/pricing";
import Link from "next/link";
// import TransparentCard from "../components/transparentcard";
export default function Page() {
  const route = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Initio Solutions - Web and App Development Services</title>
        <meta
          name="description"
          content="Initio Solutions provides web and app development services that transform new concepts into a driving force for your company. Turn any idea into a reality."
        />
        <meta
          name="keywords"
          content="web development, app development, technology pioneer, initio solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://initiosolutions.com",
              name: "Initio Solutions",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://initiosolutions.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              mainEntityOfPage: {
                "@type": "CollectionPage",
                breadcrumb: {
                  "@id": "https://initiosolutions.com/#breadcrumb",
                },
              },
              breadcrumb: {
                "@id": "https://initiosolutions.com/#breadcrumb",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://initiosolutions.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "About",
                    item: "https://initiosolutions.com/about",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Past Work",
                    item: "https://initiosolutions.com/past-work",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Blog",
                    item: "https://initiosolutions.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Contact",
                    item: "https://initiosolutions.com/contact",
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <section className="body-font">
        <div className="mx-auto flex md:flex-row flex-col px-5 py-12 items-center justify-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          <img
            className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={hi.src}
          />
          <div className="text-center text-white lg:w-2/3 w-full">
            <header>
              <h1 className="sm:text-4xl text-6xl mb-6 font-extrabold font-mono">
                The Technology Pioneer.
              </h1>
            </header>
            <p className="mb-10 leading-relaxed font-light text-lg">
              We specialize in web and app solutions designed to transform new
              concepts into driving forces for your business. With us, you can
              turn any idea into a reality.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                target="_blank"
                href="https://calendly.com/initiosolutions/30min"
                className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg shadow-md transform hover:scale-110 transition-all duration-300"
              >
                Book a call
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  route.push("/contact");
                }}
                className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="bg-yellow-100 p-4 flex items-center justify-center">
        <TransparentCard />
      </div> */}
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
      <section className="bg-gray-50 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold mb-12 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                image: website.src,
                description:
                  "Creating responsive and user-friendly websites tailored to your needs.",
              },
              {
                title: "App Development",
                image: app.src,
                description:
                  "Developing custom mobile and web applications for various platforms.",
              },
              {
                title: "SEO",
                image: seo.src,
                description:
                  "Optimizing your online presence to improve search engine rankings.",
              },
              {
                title: "Social Media Marketing",
                image: socialmedia.src,
                description:
                  "Expanding your brand's reach and engagement through targeted social media campaigns.",
              },
              {
                title: "Content Writing",
                image: content.src,
                description:
                  "Crafting compelling and informative content to attract and retain customers.",
              },
              {
                title: "Cloud and Data",
                image: data.src,
                description:
                  "Leveraging cloud technologies and managing data efficiently to drive business growth.",
              },
              {
                title: "Data Entry",
                image: dataentry.src,
                description:
                  "Providing accurate and efficient data entry services to streamline your operations.",
              },
              {
                title: "Graphic Design",
                image: graphic.src,
                description:
                  "Designing visually appealing graphics to enhance your brand identity.",
              },
            ].map((service) => (
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="rounded overflow-hidden shadow-lg cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  route.push(
                    `/services/${service.title.toLowerCase().replace(" ", "")}`
                  );
                }}
              >
                <img
                  alt={service.title}
                  className="w-full h-48 object-contain object-center"
                  src={service.image}
                />
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-base text-gray-700">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
      <Pricing />
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
