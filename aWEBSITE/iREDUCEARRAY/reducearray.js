//array.reduce --->  reduces an array to a single value

// this calculates the total amount to be paid by a user for pdts

let prices = [23, 34, 65, 55]

let total = prices.reduce(checkOut)

console.log(total);


function checkOut(total, element) {
    return total + element;
}