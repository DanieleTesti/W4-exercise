const button = document.querySelector("header");
const mainNav = document.querySelector("nav ul li");

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 300) {
    nav.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    nav.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
});
