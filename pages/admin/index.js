import { useState, useEffect } from "react";
import Router from "next/router";
import Nav from "./nav";
function Admin() {
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("email") !== process.env.ADMIN
    ) {
      Router.push("/");
    }
  }, []);
  return (
    <>
      <Nav />
    </>
  );
}

export default Admin;
