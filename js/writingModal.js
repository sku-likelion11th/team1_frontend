const tapeChange = document.querySelector(".tapeChange");
const musicChange = document.querySelector(".musicChange");

const tapeOverlay = document.getElementById("tape-overlay");
const musicOverlay = document.getElementById("music-overlay");

const modalTape = document.getElementById("modal-tape");
const modalMusic = document.getElementById("modal-music");

const closeBttns = document.querySelectorAll(".closeBttn");

const tapeBox = document.querySelector(".tape-box");
const noneModalTapeImages = document.querySelector(".page>img");

function modalTapeOn() {
  modalTape.style.display = "flex";
  tapeOverlay.style.display = "block";
  musicOverlay.style.display = "block";
  tapeBox.style.display = "none";
  noneModalTapeImages.style.display = "none";
}
function modalMusicOn() {
  modalMusic.style.display = "flex";
  tapeOverlay.style.display = "block";
  musicOverlay.style.display = "block";
  tapeBox.style.display = "none";
  noneModalTapeImages.style.display = "none";
}

function modalTapeOff() {
  modalTape.style.display = "none";
  tapeOverlay.style.display = "none";
  musicOverlay.style.display = "none";
  tapeBox.style.display = "block";
  noneModalTapeImages.style.display = "block";
}
function modalMusicOff() {
  modalMusic.style.display = "none";
  tapeOverlay.style.display = "none";
  musicOverlay.style.display = "none";
  tapeBox.style.display = "block";
  noneModalTapeImages.style.display = "block";
}

if (tapeChange) {
  tapeChange.addEventListener("click", () => {
    modalTapeOn();
  });
}
if (musicChange) {
  musicChange.addEventListener("click", () => {
    modalMusicOn();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalTapeOff();
    modalMusicOff();
  }
});

closeBttns.forEach((closeBttn) => {
  closeBttn.addEventListener("click", () => {
    modalTapeOff();
    modalMusicOff();
  });
});
