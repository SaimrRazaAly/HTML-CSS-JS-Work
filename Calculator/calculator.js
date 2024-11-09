let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((btn) =>
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = e.target.innerText;
        display.innerText = "";
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
          alert("gi");
        } catch (error) {
          display.innerText = "Saim Founded Error";
          // display.innerText =''
        }
        break;

      // case "←":
      // display.innerText = display.innerText.splice(0, display.innerText);
      // break;

      default:
        display.innerText += e.target.innerText;
        break;
    }
  })
);
