const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const yesGif = document.getElementById("yesGif");

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAYYY 💖 I knew you'd say yes 😍";
  yesGif.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
