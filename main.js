const quoteP = document.querySelector(".quote");
const generatebtn = document.querySelector(".generate");
const autoGeneratebtn = document.querySelector(".auto-generate");
const stopGeneratebtn = document.querySelector(".stop-generate");
const generateState = document.querySelector(".generate-state");

document.addEventListener("DOMContentLoaded", function () {
  autoGenerate();
});
let interval;
generatebtn.onclick = generateQuote;
autoGeneratebtn.onclick = autoGenerate;
stopGeneratebtn.onclick = stopGenerate;

async function getQuotes() {
  const res = await fetch("/quotes.json");
  const data = await res.json();
  return data;
}

async function generateQuote() {
  const quotes = await getQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteP.innerHTML = quote.text;
}
function autoGenerate() {
  interval = setInterval(generateQuote, 5000);
  generateState.innerHTML = "on";
}

function stopGenerate() {
  interval = clearInterval(interval);
  generateState.innerHTML = "off";
}
