const imgElement = document.getElementById("tapeImage");
const imgList = [
  "./source/img/tape.png",
  "./source/img/tape2.png",
  "./source/img/tape3.png",
  "./source/img/tape4.png",
];

let currentIndex = 0;

function changeImageFoward() {
  currentIndex = (currentIndex + 1) % imgList.length;
  imgElement.src = imgList[currentIndex];
}
function changeImageBack() {
  currentIndex = (currentIndex - 1 + imgList.length) % imgList.length;
  imgElement.src = imgList[currentIndex];
}
