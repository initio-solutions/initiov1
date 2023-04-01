import Head from "next/head";
import { motion } from "framer-motion";
import arabian from "../../assets/arabian.png";
import influencer from "../../assets/influencer.png";
import acaa from "../../assets/acaa.png";
import medblocks from "../../assets/medblocks.png";
// import mitfl from "../../assets/mitfl.png";
import d2 from "../../assets/d2.png";
import dreamed from "../../assets/dreamed.png";
function PastWork() {
  return (
    <>
      <Head>
        <title>Past Work | Initio Solutions</title>
      </Head>
      <section className="text-gray-600 body-font">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container px-5 py-24 mx-auto flex flex-wrap"
        >
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Our Work
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Past work has been a major part of the life of every
              individual. It is what we have done in the past, which has helped
              us to get to where we are now. Technology has changed the way that
              people work and live. It has allowed for many new opportunities
              for people to express themselves and it has also made it possible
              for people to connect with others from around the world. This
              section will provide an overview on past work and how technology
              has impacted this aspect of our lives.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <a
                  href="https://arabianblossom.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={arabian.src}
                  />
                </a>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <a
                  href="https://www.influencer.in/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={influencer.src}
                  />
                </a>
              </div>
              <div className="md:p-2 p-1 w-full">
                <a href="https://acaa.org.uk/" rel="noreferrer" target="_blank">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={acaa.src}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <a
                  href="https://medblocks.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={medblocks.src}
                  />
                </a>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <a
                  href="https://dreamedconsultancy.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={dreamed.src}
                  />
                </a>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <a href="https://d2scale.in/" rel="noreferrer" target="_blank">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={d2.src}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default PastWork;
