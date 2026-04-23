"use client";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function onSelect(e) {
    const f = e.target.files?.[0];
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
  }

  async function generate() {
    if (!file) return;

    setLoading(true);

    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    setResult(data.image);
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>See your muscular body in 10 seconds</h1>

      <input type="file" accept="image/*" onChange={onSelect} />

      {preview && <img src={preview} style={{ width: "100%", marginTop: 16 }} />}

      <button onClick={generate} style={{ marginTop: 16 }}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <>
          <img src={result} style={{ width: "100%", marginTop: 16 }} />
          <button style={{ marginTop: 12 }}>
            Download for $1
          </button>
        </>
      )}
    </main>
  );
}
