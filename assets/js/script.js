import Typify from "./typify.js";

const element1 = document.querySelector('.header');
const element2 = document.querySelector('.paragraph');
const element3 = document.querySelector('.comma');
new Typify(element1, {
  words: ["I'm Emeka"],
  pause: 3000,
  speed: 200
});
new Typify(element2, {
  words: ["...", "and I develop the web"],
  start: 3000,
  pause: 2000,
  speed: 200,
  deleteSpeed: 300
});
new Typify(element3, {
  words: [","],
  start: 2000
});