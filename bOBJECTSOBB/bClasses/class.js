//note: anything static belongs to the class not the objects in the class


class Student{

    /*** CONSTRUCTOR */ 

    constructor(name, year, course) {
        this.name = name;
        this.year = year;
        this.course = course;
    }


    
    study() {
        console.log(`${this.name} is studying`);
    }

    relax() {
        console.log("the student is relaxing");
    }

}

std1 = new Student("muki", 2022, "BSCS");

std1.study();

console.log(std1.name);