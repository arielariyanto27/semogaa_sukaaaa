// bikin confetti 50 biji
for (let i = 0; i < 50; i++) {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
  confetti.style.backgroundColor =
    ["#ff4da6", "#ff80bf", "#ffb3d9", "#ff007f"][Math.floor(Math.random() * 4)];
  document.body.appendChild(confetti);
}

setInterval(() => {
  const hearts = document.querySelectorAll(".heart");
  if (hearts.length < 5) { // kalau sudah ada 5 hati, jangan nambah lagi
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.innerText = "❤";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}, 3000); // cek tiap 3 detik



// Animasi muncul saat scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const btn = document.getElementById("music-btn"); // id harus sama
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  music.play();
  btn.style.display = "none"; // tombol disembunyikan setelah play
});



document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
