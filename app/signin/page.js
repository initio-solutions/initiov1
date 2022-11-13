"use client";
import React, { useState } from "react";
import TextField from "../../components/form/textfield";

export default function SignIn() {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <TextField
        value={name}
        onChange={onChange}
        type='text'
        label={"Full name"}
      />
    </div>
  );
}
