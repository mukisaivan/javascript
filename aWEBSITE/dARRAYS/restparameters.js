// they are used to avoid many functions with similar actions performed on different nummber of argumnets eg  sum function


let a = 1
let b = 2
let c = 5
let d = 9
let e = 3

console.log(sum(a,b,c));

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number
    }
    return total
}