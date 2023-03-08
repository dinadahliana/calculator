const toolsButton = document.querySelectorAll(".button");
const display = document.querySelector(".display");

toolsButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        display.innerText = e.target.innerText;
        console.log(`click: ${e.target.innerHTML}`);
    })
})

