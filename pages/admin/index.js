import { useState, useEffect } from "react";
import Router from "next/router";
function Admin() {
  useEffect(() => {
    if (
      !localStorage.getItem("token") &&
      !localStorage.getItem("email") === "initiosol@gmail.com"
    ) {
      Router.push("/");
    }
  }, []);
  return <></>;
}

export default Admin;
