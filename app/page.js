"use client";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  function onSelect(e) {
    const f = e.target.files?.[0];
    setFile(f);
    if (f) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    }
  }

  return (
    <main style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>See your muscular body in 10 seconds</h1>

      <input type="file" accept="image/*" onChange={onSelect} />

      {preview && (
        <img src={preview} style={{ width: "100%", marginTop: 16 }} />
      )}

      <button style={{ marginTop: 16 }}>
        Generate
      </button>
    </main>
  );
}
