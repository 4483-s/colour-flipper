const char = "0123456789abcdef";
const btn = document.getElementById("btn");
btn.addEventListener("click", flip);
function flip() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    hex += char[Math.floor(Math.random() * 16)];
  }
  console.log(hex);
  document.body.style.backgroundColor = hex;
}
