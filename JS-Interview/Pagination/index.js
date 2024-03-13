//? implement pagination


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const div = document.getElementById("div");

let pageNumber = 1;
let itemPerPage = 5;
next.addEventListener("click", () => {
  if (arr.length > pageNumber * itemPerPage) {
    div.innerHTML = ``;
    pageNumber++;
    upadatePage();
  }
});
prev.addEventListener("click", () => {
  if (pageNumber > 1) {
    div.innerHTML = ``;
    pageNumber--;
    upadatePage();
  }
});

function upadatePage() {
  const startIndex = (pageNumber - 1) * itemPerPage;
  let data = arr.slice(startIndex, startIndex + itemPerPage);
  data.forEach((e) => {
    div.innerHTML += `${e}, `;
  });
}
upadatePage();
