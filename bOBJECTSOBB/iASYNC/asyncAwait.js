// async == makes a function return a Promise


promise = new Promise((resolve, reject) => {
    
    fileLoaded = false;
    
    if (fileLoaded) {
        console.log("your file has been Loaded");
    } else {
        console.log("file failed to load");
    }
})

promise.then((value) => console.log(value)).catch(error => console.log(error))



// INSTEAD USE  ASYNC KKEYWORD 💖

async function loadFile() {

    let fileLoaded = true

    if (fileLoaded) {
        return "your file  is loaded"
    } else {
        throw "file NOT found"
    }
}
/* loadFile().then((value) => console.log(value)).catch((error) => console.log(error))  */


// AWAIT KEYWORD == IT MAKES an async function wait for a promise 💖

//note you can only use await keyword within an async function

async function startProcess() {
    let message = await loadFile();
    console.log(message);
}
startProcess();




