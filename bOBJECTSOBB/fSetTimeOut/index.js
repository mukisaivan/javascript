//setTimeOut  =>>> invokes a function after a number of milliseconds
//                 it is an asynchronous function (doesn't pause execution)

let a = setTimeout(firstMessage, 3000);
let b = setTimeout(secondMessage, 6000);
let c = setTimeout(thirdMessage, 9000);



function firstMessage() {
    alert(`Buy this course for $500`)
}

function secondMessage() {
    alert(`this is not a scam`)
}

function thirdMessage() {
    alert(`please do it!`)
}

document.getElementById("myButton").onclick = function () {

    clearTimeout(a)
    clearTimeout(b)
    clearTimeout(c)

    alert("thanks for buying the course")
    console.log("you have bought the course!");
}






/*******************
*   SETinterval    *
*                  *
 *******************/

let input = window.prompt("enter the number of times to count")
input = Number(input);

let myTimer = setInterval(countUp, 1000);
let count = 0;

function countUp() {
    count += 1;
    console.log(count);

    if (count >= input) {
        clearInterval(myTimer)
    }

}