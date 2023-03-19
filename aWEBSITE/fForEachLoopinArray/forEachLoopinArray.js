// executes a provided call back function once for each array element




let students = ["bob", "billy", "simon"]

students.forEach(capitaliseFirstLetter) // calling the function,,  finishes off the uppercasing of the first character

students.forEach(printEveryThing)

function capitaliseFirstLetter(element, index, array) {   // creating a call back function
    array[index] = element[0].toUpperCase() + element.substring(1)   // method to make first character uppercase
}
console.log(students[0]); // returns only one element and its not in uppercase


function printEveryThing(element) {
    console.log(element);
}






