"use client";
import React, { useState } from "react";

export default function SignIn() {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>SignIn</h1>
    </div>
  );
}
