"use client";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>See your muscular body in 10 seconds</h1>

      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} />

      <button style={{ marginTop: 16 }}>
        Generate
      </button>
    </main>
  );
}
