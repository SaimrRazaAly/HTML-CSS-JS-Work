let display = document.querySelector(".display");
let button = Array.from(document.querySelectorAll(".buttons"));
console.log(button);

button.map((btn)=>{
    btn.addEventListener('click',(e)=>{
        switch (e.target.innerText) {

            case 'C':
                display.innerText = '';
                break;

                case '←':
                    if (display.innerText) {
                        display.innerText = display.innerText.splice(0,-1)
                    }
        
        default :
        display.innerText += e.target.innerText 
        break;
        }
    })
})
