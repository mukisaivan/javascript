// static means belongs to the class not the objects in the class

class Car{

    static numberOfCars = 0;

    constructor(name, year) {
        this.name = name
        this.year = year;
        Car.numberOfCars += 1;  // it uses Car.  because amma need it to be accessed by the whole class
    }



}

car1 = new Car("chev", 2020)
car2 = new Car("mercedes", 2000)


console.log(car1.name);

console.log(Car.numberOfCars) // brings the number of cars that are instatiated
