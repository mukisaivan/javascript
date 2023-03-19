document.getElementById("submitButton").onclick = function () {
    
    let value = document.getElementById("tempinput").value;

    if (document.getElementById("cButton").checked) {
        alert(toCelsius(value));
    }
    else if (document.getElementById("fButton").checked) {
        alert(toFahrenheit(value))
    }
    else {
        alert("")
    }



}

function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}
function toFahrenheit(temp) {
    return (temp * 5 / 9 + 32);
}





// ° --> hold alt + 0176 on num pad