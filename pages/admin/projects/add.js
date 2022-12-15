import { useState } from "react";
import Head from "next/head";
function add() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/project", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          description,
          quote,
          category,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            setName("");
            setCompany("");
            setEmail("");
            setDescription("");
            setQuote("");
            setCategory("");
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Head>
        <title>Add project</title>
      </Head>
      <h3 className="w-1/2 mx-auto text-center my-5">Add your Project</h3>
      <div className="mx-auto w-1/2 flex flex-col space-y-5 mt-5">
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={company}
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <textarea
          type="textbox"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={quote}
          placeholder="Quote"
          onChange={(e) => setQuote(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="Category"
        >
          <option value="Website">Website</option>
          <option value="App">App</option>
        </select>
        <button
          className="bg-yellow-400 w-1/4 rounded p-2 hover:bg-yellow-200 mx-auto"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default add;
