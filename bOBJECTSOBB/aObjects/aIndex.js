// objects is a grp of properties and methods


car1 = {
    name: "mustang",
    color: "red",
    year: "2023",

    drive: function () {
        console.log(`the ${this.name }is moving`);   // {this} is a reference to a particular instance of an object
    },

    brake: function () {
        console.log(`the ${this.name} has stopped moving`);
    }
}

console.log(car1.name);

car1.brake();

