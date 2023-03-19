const element = document.getElementById("mydiv")

/*

element.onmouseover = control;
element.onmouseout = offcontrol;


function control() {
    element.style.backgroundColor = "yellow"
}

function offcontrol() {
    element.style.backgroundColor = "red"
}
*/

// syntax ==  .addlistener(event, function, useCapture)   // use capture = true for elements wc are to be worked on first



element.addEventListener("mouseover", changeRed)
element.addEventListener("mouseout", changePink)


function changeRed() {
    element.style.backgroundColor = "red"
}

function changePink() {
    element.style.backgroundColor = "pink"
}
