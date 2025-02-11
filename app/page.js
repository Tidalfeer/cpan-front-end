import React from "react";
import Navbar from "../Components/navbar";
import Counter from "./counter";
import Form from "./form";
import Toggle from "./toggle";


export default function Home() {
  return (
    <div>
      <Navbar/>   //naviagtion bar at the top of the app

      <br></br>
      <br></br>

     


      <h1>Assignment 1  CPAN 144-RNA</h1>
      <br></br>
      <h2>Tyler Lee N01728794</h2>


      <Form /> //basic form will change later to include more inforation 

      <br></br>
      <br></br>


      <Counter /> 

      <br></br>
      <br></br>


      <Toggle/>

    
    </div>
  );
}
