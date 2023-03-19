// the date object works with dates and times

// let date = new Date();  this creates a reference point to the beginning of the time you want
//let date = new Date(2023, 0, 2, 1, 2, 3, 2 )

// let year = date.getFullYear();
// let dayOfMonth = date.getDate()



//date = date.toLocaleString();
//console.log(date);


function formatDate(date) {
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getYear();

    return `${day}/ ${month}/ ${year}`
}

update();
setInterval(update, 1000)

function update() {  // function to create a timer on the DOM
    
    let date = new Date();

    document.getElementById("myLabel").innerHTML = formatTime(date)

    function formatTime(date) {
        let hour = date.getHours();
        let mins = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hour >= 12 ? "pm" : "am"

        hour = (hour % 12) || 12;

        hour = formatZeros(hour);
        mins = formatZeros(mins);
        seconds = formatZeros(seconds);

        return `${hour}:${mins}:${seconds} ${amOrpm}`

    }

    function formatZeros(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;  // putting a receeding zero for the digits to be double

    }
    
}


