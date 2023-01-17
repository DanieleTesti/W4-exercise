const button = document.querySelector("nav button");
const mainNav = document.querySelector("nav");
const cambioColore = function () {
  let offset = window.pageYOffset;

  if (offset > 300) {
    nav.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    nav.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
};
window.addEventListener("scroll", cambioColore);

const M = document.querySelectorAll(`svg g[stroke-linecap="butt" ]`);

let numero = 0;

const intervallo = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * M.length);
  const randomM = M[randomNumber];
  randomM.style.transation = "1.5 s";
  if (randomM.getAttribute("opacity") == 1) {
    randomM.setAttribute("opacity", "0");
  } else {
    randomM.setAttribute("opacity", "1");
  }
}, 40);

const stop = () => {
  clearInterval(intervallo);
};

intervallo();
stop();

// const header = document.querySelector("header");
// const getStartedBtn = document.querySelector("nav ul li");
// const cambioColore = function () {
//   let offset = window.pageYOffset;
//   console.log(offset);

//   if (offset > 300) {
//     header.classList.add("newColor");
//     header.style.backgroundColor = "white";
//     getStartedBtn.style.backgroundColor = "#1a8917";
//   } else {
//     header.classList.remove("newColor");
//     header.style.backgroundColor = "#ffc017";
//     getStartedBtn.style.backgroundColor = "#191919";
//   }
// };

// window.addEventListener("scroll", cambioColore);

// const letteraM = document.querySelectorAll(`svg g[stroke-linecap="butt" ]`);
// console.log("gruppo g", letteraM);
// let numero = 0;

// const tempo = setInterval(() => {
//   const random = Math.floor(Math.random() * letteraM.length);
//   const randomM = letteraM[random];
//   const randomMAttribut = randomM.getAttribute("opacity");
//   // console.log(random);
//   // console.log(randomM);
//   // console.log("opacity value: " + randomMAttribut);
//   numero++;

//   if (randomMAttribut == 0) {
//     randomM.setAttribute("opacity", "1");
//   } else {
//     randomM.setAttribute("opacity", "0");
//   }
//   // if (numero === 1000) {
//   //   clearInterval(tempo);
//   // }
// }, 100);
