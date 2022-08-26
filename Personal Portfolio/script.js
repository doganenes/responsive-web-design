// addEventListener Selectors
let link1 = "https://codepen.io/freeCodeCamp/full/zNqgVx";
let link2 = "https://codepen.io/freeCodeCamp/full/qRZeGZ";
let link3 = "https://codepen.io/freeCodeCamp/full/wgGVVX";
let link4 = "https://codepen.io/freeCodeCamp/full/mVEJag";
let link5 = "https://codepen.io/freeCodeCamp/full/wGqEga";
let link6 = "https://codepen.io/freeCodeCamp/full/KzXQgy";

let project1 = document.querySelector(".project1");
let project2 = document.querySelector(".project2");
let project3 = document.querySelector(".project3");
let project4 = document.querySelector(".project4");
let project5 = document.querySelector(".project5");
let project6 = document.querySelector(".project6");

// eventListeners
project1.addEventListener("click", () => {
  window.open(link1);
});
project2.addEventListener("click", () => {
  window.open(link2);
});
project3.addEventListener("click", () => {
  window.open(link3);
});
project4.addEventListener("click", () => {
  window.open(link4);
});
project5.addEventListener("click", () => {
  window.open(link5);
});
project6.addEventListener("click", () => {
  window.open(link6);
});
