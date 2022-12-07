import Nav from "./nav";
import { useState, useEffect } from "react";
import { ImBin2 } from "react-icons/im";
import { FiEdit2 } from "react-icons/fi";
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
          })
          .then(getData());
      } catch (e) {
        console.error(e);
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch("/api/expenses", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === true) {
            getData();
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  const handleEdit = async (id) => {
    try {
      await fetch("/api/expenses", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          amount,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === true) {
            getData();
          }
        });
    } catch (e) {
      console.log(e);
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
              <div
                key={d.name}
                className="flex m-2 justify-center items-center space-x-5 "
              >
                <p>{d?.name}</p>
                <p>£{d?.amount}</p>{" "}
                <FiEdit2
                  className="text-green-400"
                  onClick={() => handleEdit(d._id)}
                />
                <ImBin2
                  className="text-red-500"
                  onClick={() => handleDelete(d._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
