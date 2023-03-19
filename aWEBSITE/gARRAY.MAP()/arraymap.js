// array.map --> executes a provided callback function  once for each array element and creates a new array

// array.map must create a new array


let numbers = [2, 3, 4, 5, 6]  // original array

let squares = numbers.map(square)  // creating a new array to accomodate squares


squares.forEach(print)  //printing the new array



function square(element) {
    return Math.pow(element, 2)
}

function print(element) {
    console.log(element);
}