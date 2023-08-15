const audioElements = document.querySelectorAll(".audioElement");
const playBtns = document.querySelectorAll(".playBtn");
const stopBtns = document.querySelectorAll(".stopBtn");
let currentPlayingIndex = -1;

playBtns.forEach((playBtn, index) => {
  playBtn.addEventListener("click", () => playAudio(index));
});

stopBtns.forEach((stopBtn, index) => {
  stopBtn.addEventListener("click", () => stopAudio(index));
});

function playAudio(index) {
  if (currentPlayingIndex !== -1) {
    stopAudio(currentPlayingIndex);
  }

  const audio = audioElements[index];

  audio.volume = 0.8;
  audio.loop = false;
  audio.play();
  currentPlayingIndex = index;
}

function stopAudio(index) {
  const audio = audioElements[index];

  audio.pause();
  audio.currentTime = 0;
  currentPlayingIndex = -1;
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (currentPlayingIndex !== -1) {
      stopAudio(currentPlayingIndex);
    }
  }
});

const changeBttn = document.getElementById("changeBttn");
if (changeBttn) {
  changeBttn.addEventListener("click", () => {
    stopAudio(currentPlayingIndex);
  });
}
