import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
function Index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getContact() {
      try {
        const response = await fetch("/api/contact", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        console.log(result);
        if (result.data !== null) {
          setData(result.data);
        }
      } catch (e) {
        console.error("Error fetching contacts:", e);
      }
    }

    getContact();
  }, []);

  return (
    <>
      <Head>
        <title>All Contacts</title>
      </Head>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-gray-700 justify-center text-center p-2">
          All Contacts
        </h1>
        {data?.map((d) => (
          <button
            onClick={() => Router.push(`/admin/contacts/${d._id}`)}
            className="w-full border-2 rounded p-2 text-left hover:bg-slate-100 transition-colors duration-300"
            key={d._id}
          >
            <p className="text-2xl">{d.name}</p>
            <p>{d.email}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default Index;
