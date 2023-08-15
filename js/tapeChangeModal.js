const tapeChange = document.querySelector(".tapeChange");
const musicChange = document.querySelector(".musicChange");

const modalOverlay = document.querySelector(".modal-overlay");
const modalTape = document.getElementById("modal-tape");
const modalMusic = document.getElementById("modal-music");

const closeBttn = document.querySelector(".closeBttn");

const changeBttn = document.querySelector(".change-bttn");
const tapeBox = document.querySelector(".tape-box");
const noneModalTapeImages = document.querySelector(".page>img");

function modalTapeOn() {
  modalTape.style.display = "flex";
  modalOverlay.style.display = "block";
  tapeBox.style.display = "none";
  noneModalTapeImages.style.display = "none";
}
function modalMusicOn() {
  modalMusic.style.display = "flex";
  modalOverlay.style.display = "block";
  tapeBox.style.display = "none";
  noneModalTapeImages.style.display = "none";
}

function modalTapeOff() {
  modalTape.style.display = "none";
  modalOverlay.style.display = "none";
  tapeBox.style.display = "block";
  noneModalTapeImages.style.display = "block";
}
function modalMusicOff() {
  modalMusic.style.display = "none";
  modalOverlay.style.display = "none";
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

closeBttn.addEventListener("click", () => {
  modalTapeOff();
  modalMusicOff();
});
