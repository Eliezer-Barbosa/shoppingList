// like this work as well
// var button = document.querySelector("button");
// var input = document.querySelector("input");

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");// create li element
    li.appendChild(document.createTextNode(input.value));// append text to li
    li.setAttribute("class","list-group-item list-group-item-primary");
    ul.appendChild(li);// append li to ul
    input.value = '';// then set text value to be empty
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) { // 13 is enter key
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); // callback function is without '()'

input.addEventListener("keypress", addListAfterKeypress);

