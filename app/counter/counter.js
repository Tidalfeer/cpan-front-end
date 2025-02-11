"use client";

import { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      

      <br></br>

      
      <h2>Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}