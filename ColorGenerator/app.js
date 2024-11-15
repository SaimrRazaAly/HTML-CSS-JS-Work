let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

function generateColors() {
  let hex = "1234567890ABCEDF";
  let color = "#";

  for (let i = 0; i < 5; i++) {
    let data = Math.floor(Math.random() * 16);
    color += data;
  }

  return color;
}

let main;

let final_Color = generateColors();
console.log(final_Color);

start.addEventListener("click", () => {
  main = setInterval(function () {
    document.body.style.backgroundColor = generateColors();
  }, 500);
});
stop.addEventListener("click", () => {
  clearInterval(main);
});
