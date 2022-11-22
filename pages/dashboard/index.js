import { useState, useEffect } from "react";
function Dashboard() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Router.push("/");
    }
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
