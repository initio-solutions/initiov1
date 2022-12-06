import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import Head from 'next/head';
function About() {
  return (
    <>
      <Head>
        <title>About | Initio Solutions</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center mx-auto"
              alt="hero"
              src={about1.src}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              We are a full-service digital marketing agency that helps
              businesses grow. Our services include web design and development,
              SEO, content writing, social media marketing, and data analytics.
              We work with clients from startups to Fortune 500 companies and
              have helped them achieve their goals for almost 20 years. As a
              content writer, you know how difficult it is to write compelling
              and engaging content. You also know how difficult it is to find
              time to write when you have other responsibilities like managing
              social media, data analytics, and SEO. That s why we created
              WriteBrain - an AI-powered content writing assistant that helps
              you generate high-quality content in just a few seconds.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">
                Button
              </button>
            </div>
            {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex  px-5 py-24 md:flex-row-reverse flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center mx-auto"
              alt="hero"
              src={about2.src}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why Choose Us?
            </h1>
            <p className="mb-8 leading-relaxed">
              We are a company that specializes in providing the best technology
              solutions. Our team of experts is able to design, implement and
              manage any type of IT infrastructure. We have been serving clients
              for over 10 years, and we are proud to have a diverse portfolio of
              satisfied customers.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">
                Button
              </button>
            </div>
            {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
