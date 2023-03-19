const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("submitButton").onclick = function () {
    

    
    let guess = document.getElementById("guessField").value
    guesses += 1;

    if (guess == answer) {
        alert(`you got the answer in ${guesses} guesses`);
        
    }
    else if (guess > answer) {
        alert("your guess is greater than the answer")
    }
    else {
        alert("too small");
    }

}

