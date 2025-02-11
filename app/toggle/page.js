"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RouteKind } from "next/dist/server/route-kind";


export default function Toggle() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      

      <br></br>

      
      <h2>Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p style={{ backgroundColor: '#325fd', padding: '10px', borderRadius: '5px' }}>You have found my secret click the button below now!</p>}

      <button onClick={() => router.push("/")}>Narnia</button>



    </div>
  );
}
