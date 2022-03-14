const round = document.querySelector(".round-wrap");
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
    const degree = (360 / itemLength) * i + increase; // 360 / 10 * 반복문 i + increase
    const radian = (degree * Math.PI) / 180;
    const point = circle(wr, hr, radian); // 265, 265, radian
    // console.log("degree", degree);
    // console.log("radian", radian);
    const x = Math.floor(point.x + cx); // point.x = 265 * Math.cos(Radian), cx = 265
    const y = Math.floor(point.y + cy); // point.y = 265 * Math.sin(Radian), cy = 265
    const el = document.querySelector(`.point${i}`);
    el.style.left = x - gap + "px";
    el.style.top = y - gap + "px";
  }
}

display(265, 265, 265, 265);

function rotate() {
  setInterval(function () {
    increase++;
    console.log(increase);
    display(265, 265, 265, 265);
  }, 50);
  //   round.style.webkitTransform = "rotate(" + degrees + "deg)";
  // }, 50);
}

rotate();
