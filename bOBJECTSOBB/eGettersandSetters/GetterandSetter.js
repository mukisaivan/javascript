// get method used to add alayer of protection
// set method used to set a maximum value incase a user exceeds the maximum



class Car{
    constructor(power, gas) {
        this._power = power;   // _power adds protection because makes the variable not t be changed
        this._gas = gas;
    }

    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L`
    }
 
    // SETS THAT IF the gas value input is > 50 then the value will be set to a desired value
    set gas(value) {
        
        if (value > 50) { value = 500 }
        else if (value < 0) { value = 0 }
        
        this._gas = value
    }

}

car1 = new Car(500, 34)

car1.gas = -1;  //trying to assign a big value to the gas

console.log(car1.gas);

console.log(car1.power);

