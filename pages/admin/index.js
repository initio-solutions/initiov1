import { useState, useEffect } from "react";
import Router from "next/router";
function Admin() {
  useEffect(() => {
    if (!localStorage.getItem("token")&&localStporage.getItem('email')==='initiosol@gmail.com') {
      Router.push("/");
    }
  }, []);
  return <div>Admin</div>;
}

export default Admin;
