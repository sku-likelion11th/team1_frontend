const tapeImages = document.querySelectorAll(".modal-on");
const tapeChange = document.querySelector(".tapeChange");

const modalOverlay = document.getElementById("modal-overlay");
const closeBtn = modal.querySelector(".close-area");

tapeImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalOn();
  });
});

tapeChange.addEventListener("click", () => {
  modalOn();
});

function modalOn() {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
}

function modalOff() {
  modalOverlay.style.display = "none";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOff();
  }
});

closeArea.addEventListener("click", () => {
  modalOff();
});
