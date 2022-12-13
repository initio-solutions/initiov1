import Head from "next/head";
import { motion } from "framer-motion";
function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      div
      className="h-screen w-screen"
    >
      <Head>
        <title>Products | Initio Solutions</title>
      </Head>
      <p className="mt-10 w-1/2 mx-auto text-center">Coming Soon</p>
    </motion.div>
  );
}

export default Products;
