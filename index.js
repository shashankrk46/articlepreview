const shareItem = document.querySelector(".share-item");
const shareList = document.querySelector(".share-list");
const rightCol = document.querySelector(".right-col");
const container = document.querySelector(".container");
const share = document.querySelector(".share");

shareItem.addEventListener("click", showList);
rightCol.addEventListener("click", removeshowList);
container.addEventListener("click", removeshowList);

function showList() {
  shareList.style.display = "block";
  shareItem.style.background = "hsl(214, 17%, 51%)";
  share.style.color = "hsl(210, 46%, 95%)";
}

function removeshowList(e) {
  if (e.target === rightCol || e.target === container) {
    shareList.style.display = "none";
    shareItem.style.background = "hsl(210, 46%, 95%)";
    share.style.color = "hsl(214, 17%, 51%)";
  }
}
