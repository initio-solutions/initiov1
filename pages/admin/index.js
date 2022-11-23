import { useState, useEffect } from "react";
import Router from "next/router";
function Admin() {
  useEffect(() => {
    if (
      !localStorage.getItem("token") &&
      !localStorage.getItem("email") === process.env.ADMIN_EMAIL
    ) {
      Router.push("/");
    }
  }, []);
  return <></>;
}

export default Admin;
