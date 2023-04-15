import { useEffect, useState } from "react";
import Head from "next/head";
import limitCharacters from "limit-characters";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
function Index({ data = [], totalPages }) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { page } = router.query;

  const currentPage = parseInt(page || 1, 10);

  const handlePageChange = (newPage) => {
    router.push(`/blog?page=${newPage}`);
  };
  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="p-2">
        <div className="h-6 bg-gray-200 w-full mt-4"></div>
        <div className="h-4 bg-gray-200 w-full mt-2"></div>
        <div className="h-4 bg-gray-200 w-full mt-2"></div>
        <div className="h-4 bg-gray-200 w-3/4 mt-2"></div>
      </div>
    </div>
  );
  if (isLoading) return <LoadingSkeleton />;
  const Pagination = () => (
    <div className="mt-6 flex items-center justify-center">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="mx-4">{currentPage}</span>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
  const filteredData =
    data &&
    data
      .filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <Head>
        <title>Blogs | Initio Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A collection of insightful blog posts by Initio Solutions on technology, business, and industry trends."
        />
        <meta
          name="keywords"
          content="blog, initio solutions, insights, technology, business, industry trends"
        />
        <meta name="author" content="Initio Solutions" />
      </Head>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-100 min-h-screen"
      >
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-700 capitalize lg:text-3x">
            From the blog
          </h1>
          <input
            alt="cover image"
            type="text"
            className="w-full p-2 mt-4 mb-8 text-gray-700 border border-gray-300 rounded"
            placeholder="Search for blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredData?.length !== 0 &&
            filteredData
              .slice()
              .reverse()
              .map((d) => (
                <div
                  style={{ cursor: "pointer" }}
                  key={d?._id}
                  onClick={() => Router.push(`/blog/${d?._id}`)}
                  className="mt-8 lg:-mx-6 lg:flex lg:items-center "
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                    src={d?.imageUrl}
                    alt="cover image"
                    priority={true}
                  />

                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="block mt-4 text-2xl font-semibold text-black ">
                      {d?.title}
                    </p>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: limitCharacters({
                          text: d?.content,
                          length: 250,
                        }),
                      }}
                      className="mt-3 text-sm prose prose-strong:text-white text-gray-500 md:text-sm"
                    ></p>

                    <a
                      href="#"
                      className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
        </div>
        <Pagination />
      </motion.section>
    </>
  );
}
export async function getServerSideProps(context) {
  const { page } = context.query;
  try {
    const response = await fetch(
      `${process.env.URL}/api/blog?page=${page || 1}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      console.error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
      return { props: { data: [] } };
    }

    const responseData = await response.json();

    return {
      props: {
        data: responseData.data,
        totalPages: responseData.pagination.totalPages,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
        totalPages: 0,
      },
    };
  }
}

export default Index;
