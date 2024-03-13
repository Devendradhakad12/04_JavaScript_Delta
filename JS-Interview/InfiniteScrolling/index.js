let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let pageNumber = 1;
let itemPerPage = 5;

function upadatePage() {
  const startIndex = (pageNumber - 1) * itemPerPage;
  let data = arr.slice(startIndex, startIndex + itemPerPage);
  console.log(data);
}
upadatePage();

 

window.addEventListener("scroll", () => {
/*  console.log(window.innerHeight)
 console.log(window.scrollY)
 console.log(document.body.offsetHeight) */
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    arr.length > pageNumber * itemPerPage
  ) {
    pageNumber++;
    upadatePage();
  }
  if (
    window.innerHeight + window.scrollY <= document.body.offsetHeight &&
    pageNumber > 1
  ) {
    pageNumber--;
    upadatePage();
  }
});
