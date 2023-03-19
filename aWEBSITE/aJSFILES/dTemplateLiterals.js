let username = "ivan";
let items = 3;
let total = 75;


// console.log("hello" ,username);

/* TEMPLATE LITERALS

console.log(`hello ${username}`);
console.log(`you have ${items} items in your cart`);
console.log(`your total is ${total}`);
*/


//MODIFICATION OF THE TEMPLATE LITERAL INTO ONE SINGLE TEXT

let text = 
`hello ${username}<br>
you have ${items} items in your cart<br>
your total is ${total}
`
//console.log(text);



document.getElementById("templateliteral").innerHTML = text;
