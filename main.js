var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var id;

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", event => {
        id = event.target.innerHTML;
        cellClick(event);
    });
}

function cellClick(cell) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("style");
    }
    event.target.setAttribute("style", "background-color:#000000; color:#ffffff");
}

button.addEventListener("click", () => {
    if (input.value !== "") {
        let cellValue = document.createElement("div");
        cellValue.innerHTML = input.value;
        cellValue.setAttribute("style", "color:" + color.value);
        cells[id - 4].appendChild(cellValue);
        input.value = "";
        input.placeholder = "Type something...";
    }
});

input.addEventListener("keyup", event => {
    if (event.target.value !== "" && event.keyCode == 13) {
    	let cellValue = document.createElement("div");
        cellValue.innerHTML = input.value;
        cellValue.setAttribute("style", "color:" + color.value);
        cells[id - 4].appendChild(cellValue);
        input.value = "";
        input.placeholder = "Type something...";
    }
});


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for (var i = 0; i < themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}