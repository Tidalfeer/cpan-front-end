"use client";

import { useState } from "react";


export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      

      <br></br>

      
      <h2>Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p style={{ backgroundColor: '#325fd', padding: '10px', borderRadius: '5px' }}>This is the end of the page!!</p>}
    </div>
  );
}
