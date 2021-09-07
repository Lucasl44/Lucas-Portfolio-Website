const colorButton = document.getElementById("colorInput");
const coloring = document.getElementById("colorBox");
const button = document.getElementById("subButton");

button.addEventListener("click", () => {
    coloring.style.backgroundColor = colorButton.value;
    colorButton.value = "";
});

//shopping list section for page 2
const newItem = document.getElementById("newItem");
const removeItem = document.getElementById("removeItem");
const inputItem = document.getElementById("inputItem");
let shoppingList = document.getElementById("shoppingList");

newItem.addEventListener("click", () =>{
    let listItem = document.createElement("li");
    listItem.textContent = inputItem.value;
    inputItem.value = "";
    
    let theList = document.getElementsByTagName("ul")[0];
    theList.append(listItem)    
});