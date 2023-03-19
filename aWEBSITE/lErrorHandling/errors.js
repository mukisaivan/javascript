//erro something going wrong

try {
    let x = window.prompt("enter a number")
    x = Number(x);
    
    if (isNaN(x)) throw "this is not a number";  // incase some other value (not an integer is) is filled in by he user 
    if (x == "") throw "type in something";

} catch (error) {
    console.log(errror);
}
finally {
    console.log("this always executes");
}