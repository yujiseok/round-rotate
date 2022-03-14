const round = document.querySelector(".round-wrap");
// const btn = document.querySelector(".toggle");
// let rotate = false;
let runner;
let degrees = 0;
const itemLength = 10;
const gap = 10;
let increase = 0;

function circle(wr, hr, radian) {
  const x = wr * Math.cos(radian);
  const y = hr * Math.sin(radian);
  return {
    x,
    y,
  };
}

function display(cx, cy, wr, hr) {
  for (let i = 0; i < itemLength; i++) {
    const degree = (360 / itemLength) * i + increase;
    const radian = (degree * Math.PI) / 180;
    const point = circle(wr, hr, radian);
    const x = Math.floor(point.x + cx);
    const y = Math.floor(point.y + cy);
    const el = document.querySelector(`.point${i}`);
    el.style.left = x - gap + "px";
    el.style.top = y - gap + "px";
  }
}

function rotate() {
  runner = setInterval(function () {
    increase++;
    console.log(increase);
    display(265, 265, 265, 265);
  }, 50);
  //   round.style.webkitTransform = "rotate(" + degrees + "deg)";
  // }, 50);
}

rotate();

// function stop() {
//   clearInterval(runner);
// }

// btn.addEventListener("click", function () {
//   if (!rotate) {
//     rotate = true;
//     start();
//   } else {
//     rotate = false;
//     stop();
//   }
// });
