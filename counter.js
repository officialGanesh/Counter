
console.log("Counter 🚀")

let count = 0
let number = document.getElementById("num");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let all_buttons = document.querySelectorAll('.btn');
all_buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        let change_num = e.currentTarget.id
        
        switch (change_num) {
            case "decrease":
                count--
                number.textContent = count
                number.style.color = "red"
                
                break;

            case "reset":
                
                count = 0
                number.textContent = count
                number.style.color = "blue"
                
                break;

            case "increase":
                count++
                number.textContent = count
                number.style.color = "green"
                
                break;
        
            default:
                count = 0
                break;
        }
    })
})