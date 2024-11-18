let input =document.querySelector('#inputBox')
let todolist  = []
let result =document.querySelector('#result')

function add(){
    let inputValue = input.value
    if(inputValue===''){
        alert("Please enter a task")
    }
    else{
        todolist.push(inputValue)
        console.log(todolist)
     input.value = ''
     inputValue = ''
          updateTodo()
    }
}

function updateTodo(){

    result.innerHTML = ''
todolist.forEach((value,index)=>{

    result.innerHTML +=`
      <div class="result-area">

                <li>${value}</li>
                <div>
                    
                    <button class="cool" onclick="edit(${index})">Edit</button>
                    <button class="danger" onclick="del(${index})">Delete</button>
                </div>
            </div>
    `
})

}
function edit(index){
    let newValue = prompt("Edit the todo",todolist[index])
   if(newValue !== null){
    todolist[index] = newValue
    updateTodo()
   }
}
function del(index){
    todolist.splice(index,1)
    updateTodo()
}

function ClearAll(){
  todolist = []
  updateTodo()
}