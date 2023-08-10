const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
function modalOn() {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
}
function isModalOn() {
  return modal.style.display === "flex";
}
function modalOff() {
  modalOverlay.style.display = "none";
}
const btnModal = document.getElementById("btn-modal");
btnModal.addEventListener("click", (e) => {
  modalOn();
});
const closeBtn = modal.querySelector(".close-area");
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
