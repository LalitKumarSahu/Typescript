//! 1. Type Gaurds
function add(a, b) {
    // add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(20, 30));
console.log(add("20", 30)); //2030
var emp1 = {
    name: "lalit mern stack",
    privilages: ['create-server'],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name", emp.name);
    // console.log("privilages", emp.privilages);
    // start adding type gaurd
    // if(typeof emp === "object"){ // wrong code
    //    console.log(emp.privilages);
    // }
    // use in keyword that built in js
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
// printEmployeeInformation(emp1);
// printEmployeeInformation({name : "Aman", startDate:new Date()});
//3. Type guards in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car ....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a Truck ....");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //vehicle.loadCargo(5000);
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(5000);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
// type casting / type assertion
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
var userInput = document.getElementById("input-field");
userInput.value = "Hi lalit.";
