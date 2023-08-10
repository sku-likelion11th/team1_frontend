const tapeImages = document.querySelectorAll(".modal-on");
const modalOverlay = document.getElementById("modal-overlay");
const closeBtn = modal.querySelector(".close-area");

tapeImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalOn();
  });
});

function modalOn() {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
}
function modalOff() {
  modalOverlay.style.display = "none";
}

closeBtn.addEventListener("click", (e) => {
  modalOff();
});
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modalOff();
  }
});
window.addEventListener("keyup", (e) => {
  if (isModalOn() && e.key === "Escape") {
    modalOff();
  }
});
