const tapeImages = document.querySelectorAll(".modal-on");
const modalOverlay = document.getElementById("modal-overlay");
const closeBtn = modalOverlay.querySelector(".close-area");

const changeBttn = document.querySelector(".change-bttn");
const tapeBox = document.querySelector(".tape-box");
const noneModalTapeImages = document.querySelector(".page>img");

if (tapeImages) {
  tapeImages.forEach((image) => {
    image.addEventListener("click", () => {
      modalOn();
    });
  });
}

function modalOn() {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
  tapeBox.style.display = "none";
}

function modalOff() {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
  tapeBox.style.display = "block";
}
if (changeBttn) {
  changeBttn.addEventListener("click", () => {
    modalOff();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOff();
  }
});

closeArea.addEventListener("click", () => {
  modalOff();
});

changeBttn.addEventListener("click", () => {
  modalOff();
});
