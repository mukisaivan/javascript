// A map is an object that holds key-value pairs of any data type


store = new Map([
    ["tshirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]

])

store.forEach((value, key) => console.log(`${key} $${value}`))  ///this iterates and displays each pair of the map


// GETTING ITEMS and adding them up to get total price


let shoppingcart = 0;


shoppingcart += store.get("tshirt");
shoppingcart += store.get("jeans");


console.log(shoppingcart);


