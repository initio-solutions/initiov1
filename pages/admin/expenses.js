import Nav from "./nav";
import { useState, useEffect } from "react";
function Expenses() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      await fetch("/api/expenses", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((d) => {
          console.log(d.data);
          if (d.data !== null) {
            setData(d.data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" || amount !== undefined) {
      console.log(name, amount);
      try {
        await fetch("/api/expenses", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            amount,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success === true) {
              setName("");
              setAmount();
            }
          });
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <>
      <div className="flex ">
        <Nav variable="expenses" />
        <div className="ml-4 mt-2 w-full p-2">
          <h1>Expenses</h1>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-primary p-4 rounded text-gray-800 hover:bg-yellow-400"
          >
            Submit
          </button>

          <div className="flex-col">
            {data.map((d) => (
              <div key={d.name} className="flex m-2 justify-center space-x-5 ">
                <p>{d?.name}</p>
                <p>£{d?.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
