const surprises = [
  {
    title: "I will not do that again",
    message: "Forgive me, magiging behave na ako simula ngayon please huhu.",
    image: "jah-jah.jpg"
  }
];

const modal = document.querySelector("#surpriseModal");
const image = document.querySelector("#surpriseImage");
const title = document.querySelector("#surpriseTitle");
const message = document.querySelector("#surpriseMessage");
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicStatus = document.querySelector("#musicStatus");
const sorryTrack = document.querySelector("#sorryTrack");
const sorryMessages = [
  "sorry 🥺", "i'm really sorry ♡", "forgive me?", "sorry na please", "you mean a lot to me",
  "sorry jah ✿", "one more sorry", "i'll do better", "pinky promise", "sorry sorry sorry"
];

const bubbles = sorryMessages.map((text) => `<span class="sorry-bubble">${text}</span>`).join("");
sorryTrack.innerHTML = bubbles + bubbles;

async function playMusic() {
  backgroundMusic.currentTime = 0;
  try {
    await backgroundMusic.play();
    musicStatus.textContent = "Now playing ♡";
  } catch {
    musicStatus.textContent = "Idagdag muna ang a-thousand-years.mp3 sa folder para tumugtog ang music.";
  }
}

backgroundMusic.addEventListener("error", () => {
  musicStatus.textContent = "Hindi makita ang a-thousand-years.mp3 sa folder.";
});

document.querySelectorAll(".apology-letter").forEach((gift) => {
  gift.addEventListener("click", () => {
    const surprise = surprises[gift.dataset.gift];
    image.src = surprise.image;
    title.textContent = surprise.title;
    message.textContent = surprise.message;
    modal.showModal();
    playMusic();
  });
});

function closeSurprise() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  modal.close();
}

document.querySelector("#closeButton").addEventListener("click", closeSurprise);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSurprise();
});
