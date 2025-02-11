import React from "react";
import Navbar from "../Components/navbar";
import Counter from "./counter";
import Form from "./form";
import Toggle from "./toggle";


export default function Home() {
  return (
    <div>
      <Navbar/> 

      <br></br>
      <br></br>

     


      <h1>Assignment 1  CPAN 144-RNA</h1>
      <br></br>
      <h2>Tyler Lee N01728794</h2>


      <Form />

      <br></br>
      <br></br>


      <Counter />

      <br></br>
      <br></br>


      <Toggle/>

    
    </div>
  );
}