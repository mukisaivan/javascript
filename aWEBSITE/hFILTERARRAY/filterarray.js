let ages = [12, 14, 11, 17, 18, 16, 23]

let adults = ages.filter(checkAge)

adults.forEach(print)

function checkAge(elements) {
    return elements >= 18
}

function print(element) {
    console.log(element);
}