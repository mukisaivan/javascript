// A callback is a way of calling a function in another function
// it helps us develop asynchronous code (when one function has to wait for another function inorder to execute)

sum(2, 3, displayConsole)


function sum(x, y, callBack) {
    let result = x + y;
    callBack(result);
}

function displayConsole(output) {
    console.log(output);
}


function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}























product(3, 4, displayDOM)

function product(x, y, calledFunction) {
    let result = x * y;
    calledFunction(result)
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output
}








