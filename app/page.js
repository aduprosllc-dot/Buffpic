async function checkout() {
  alert("clicked"); // test
  const res = await fetch("/api/checkout", { method: "POST" });
  const data = await res.json();
  window.location.href = data.url;
}
