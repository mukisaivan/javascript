const mybutton = document.querySelector("#mybutton")
const myimage = document.querySelector("#myimage")

mybutton.addEventListener("click", () => {

    if (myimage.style.visibility == "hidden") {
        myimage.style.visibility = "visible"
    }
    else {
        myimage.style.visibility = "hidden"
    }

})