const shareItem = document.querySelector(".share-item");
const shareList = document.querySelector(".share-list");
const rightCol = document.querySelector(".right-col");

shareItem.addEventListener("click", showList);

function showList() {
  shareList.style.display = "block";
}
