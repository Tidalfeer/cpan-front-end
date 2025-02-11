"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = (event) => {
    const selectedPath = event.target.value;
    router.push(selectedPath);
  };

  return (
    <nav>
      <select onChange={handleNavigation} defaultValue="">
        <option value="" disabled>
          Select a page
        </option>
        <option value="/">Home</option>
        <option value="/counter">Counter</option>
        <option value="/toggle">Toggle</option>
        <option value="/form">Form</option>
      </select>
    </nav>
  );
}