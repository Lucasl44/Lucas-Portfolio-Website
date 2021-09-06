const colorButton = document.getElementsByClassName("colorInput");
const coloring = document.getElementsByClassName("colorBox");
const button = document.getElementById("subButton");

button.addEventListener("click", () => {
    coloring.style.color = colorButton.value;
})
