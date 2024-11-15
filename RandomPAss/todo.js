let input = document.querySelector("#inputBox");
let result = document.querySelector("#result");
let array = [];

function add() {
  if (input.value) {
    array.push(input.value);
    console.log(array);
    input.value = "";
  }
  else{
    alert("please enter a todo")
  }
  updateDisplay();
}
function updateDisplay() {
  result.innerHTML = "";

  array.forEach((value, i) => {
    result.innerHTML += `
        <div>${value}</div>
        <button class="edit" onclick='edit(${i})'>Edit</button>
        <button class="del" onclick='del(${i})'>Del</button>
        `;
  });
}
function edit(index) {
  let newValue = prompt("Edit the todo", array[index]);
  if (newValue !== null) {
    array[index] = newValue;
    updateDisplay();
  }
}
function del(index) {
  array.splice(index, 1);
  updateDisplay();
}
