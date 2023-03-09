const toolsButton = document.querySelectorAll(".button");
const display = document.querySelector(".input");
const summary = document.querySelector(".equal");
const reset = document.querySelector(".clear");
let output = document.querySelector(".summary");

const operator = ["+", "-", "*", "/"];
const other = ["=", "C", "+/-"];
let input = "";

toolsButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const buttonContent = e.target.innerText
        if (operator.includes(buttonContent)) {
            input += ` ${buttonContent} `;
            display.innerText = input;
        } else if (other.includes(buttonContent)) {
            display.innerText = "";
        } else {
            input += `${buttonContent}`;
            display.innerText = input;
        }     
        console.log(`click: ${e.target.innerHTML}`);
    })
    
});

summary.addEventListener("click", () =>{
    console.log(input);
    
    console.log(math.evaluate(input));
    
    output.innerHTML = math.evaluate(input);
    
    input = "";   
});

reset.addEventListener("click", () => {
    input = "";
    input.innerHTML = "";
    output.innerHTML = "";
})