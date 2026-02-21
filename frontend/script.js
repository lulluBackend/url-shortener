async function shorten() {
  const url = document.getElementById("urlInput").value;

  console.log("URL enviada:", url);

  const res = await fetch("http://127.0.0.1:5000/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: url })
  });

  const data = await res.json();

  console.log(data);

  document.getElementById("result").innerText = data.shortUrl;
}