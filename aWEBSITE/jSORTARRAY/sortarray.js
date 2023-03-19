// using call back
// sorting elements in an array


let array = [4, 56, 76, 23, 1, 33]

array = array.sort(ascendingSort)

array.forEach(print)

function ascendingSort(x, y) {
    return x - y
}

function print(element) {
    console.log(element);
}




greet = (username) => {
    console.log("hello", username);
}

greet("mukisa")