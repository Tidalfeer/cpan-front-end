"use client";

import { useState } from "react";


export default function Form() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      

      <br></br>

      
      <h2>Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Hello, {name}!</p>}
    </div>
  );
}
