"use client"

import { useEffect, useState } from "react";
import { tasks } from "../app/lib/mock-data"

export default function Home() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('data');

    if (!initialized && !storedData) {
      const jsonArray = JSON.stringify(tasks);
      sessionStorage.setItem('data', jsonArray);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <main>
      <h1>hello world</h1>
      <p>
        {sessionStorage.data}
      </p>
    </main>
  );
}
