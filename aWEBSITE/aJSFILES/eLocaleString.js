// toLocaleString() --> returns a string with a language sensitive representation of a number



let num = 123456.789;

num = num.toLocaleString("en-US", {style: "currency", currency: "USD"})

console.log(num);
