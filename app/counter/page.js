"use client"; 

import { useState } from "react"; 
import { useRouter } from "next/navigation";

export default function CounterPage() {
    const router = useRouter();
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

 
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Current Count: {count}</p>

      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

        <br></br>
        <br></br>

        <button onClick={() => router.push("/")}>Home</button>

    </div>
  );
}