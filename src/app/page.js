"use client"

import { useEffect, useState } from "react";
import { tasks } from "../app/lib/mock-data"

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    const storedData = sessionStorage.getItem('data');

    if (!storedData) {
      const jsonArray = JSON.stringify(tasks);
      sessionStorage.setItem('data', jsonArray);
      setData(jsonArray);
    } else {
      setData(storedData);
    }
  }, []);

  return (
    <main>
      <h1>hello world</h1>
      <p>
        {data}
      </p>
    </main>
  );
}
