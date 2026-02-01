const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:20%;">
            <h1>YAYYY 💖🥰</h1>
            <p>I knew you’d say yes 😌</p>
        </div>
    `;
});
