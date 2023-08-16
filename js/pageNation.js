let thisPage = 1;
const limit = 6;
const list = document.querySelectorAll(".list .item");

function loadItem() {
  const beginGet = (thisPage - 1) * limit;
  const endGet = thisPage * limit - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}

loadItem();

function listPage() {
  const count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";
  if (thisPage != 1) {
    const prev = document.createElement("li");
    prev.innerText = "<<";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }
  for (let i = 1; i <= count; i++) {
    const newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
