//synchronous code =    In an ordered sequence step-by-step linear instructions

// asynchronous = do not work in a sequence eg accessing a dataase fetching a file




/***********
* PROMISES *
************/

// let fileLoaded = true;  // this pretends to fetch a file so that a respose is received later ,,,,, either the file has been found or otherwise


const promise = new Promise((resolve, reject) => {

    let fileLoaded = true;
    if (fileLoaded) {
        resolve("file loaded")
    }
    else {
        reject("file not loaded") // if u invoke the reject then you have to preceed the "promise.then" with ".catch()"
    }
}
);

promise.then(value => console.log(value)).catch(error => console.error(error))

// the catch methood is added to be displayed incase the fileloaded is false(rejected)



// second promise example

const wait = new Promise((resolve) => {
    
    setTimeout(resolve, 3000)
})

wait.then(() => console.log("finally am printed"))


//ORRRRRR

const wait2 = time => new Promise((resolve) => {
    setTimeout(resolve, time)
})
wait2(6000).then(() => console.log("this is the display of the second wait"))



