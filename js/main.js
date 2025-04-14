const wrap = document.querySelector("#wrap");
const btnMove = document.querySelector(".btnMove");
const btnReset = document.querySelector(".btnReset");

btnMove.addEventListener("click", () => {
  gsap.to(".box", {
    x: 300,
    y: 200,
    rotation: 360,
    duration: 1,
    backgroundColor: "pink",
  });
});

btnReset.addEventListener("click", () => {
  gsap.to(".box", {
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.5,
    backgroundColor: "aqua",
  });
});
