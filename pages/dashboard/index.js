import { useState, useEffect } from "react";
import Router from "next/router";
function Dashboard() {
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("email") === "initiosol@gmail.com"
    ) {
      Router.push("/");
    }
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
