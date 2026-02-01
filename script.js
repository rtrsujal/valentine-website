// Button references
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Make No button run away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes button click
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:20%;">
            <h1>YAYYY 💖🥰</h1>
            <p>I knew you’d say yes 😌</p>
        </div>
    `;
});

// Floating hearts animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}, 500);
