//-------Genric intro------->
// one type is connected to another type is calles genric
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Boy = {
    name: "ShivA",
    age: 18,
};
// const fruits : Array<Boy> = [{name : "vivek",age : 12}];
// console.log(fruits)
var fruits = [{ name: "vivek", age: 12 }];
//console.log(fruits);
// const fruits : Array<string> = []
// fruits.push("Mango");
// fruits.push("banana");
// fruits.push("Apple");
// fruits.push("anannas");
// console.log(fruits)
//eg2
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "patel" }, { role: "software engineer" }, { id: "cmsmsl" });
//console.log(res);
// 2.Genric Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
var numberBox = { value: 200 };
//console.log(numberBox);
var stringBox = { value: "Dummy" };
//console.log(stringBox);
var objBox = { value: { name: "lalit" } };
var response = { data: "success", status: 200 }; // default string
var jsonRes = { data: { key: "value" }, status: 200 };
console.log(response);
console.log(jsonRes);
var objRes = { data: { name: "lalit", age: 18 }, status: 200 };
// console.log(objRes);
//4.Genric with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("hello");
console.log(stringContainer.getContent());
var numberContainer = new Container(100);
// console.log(numberContainer.getContent());
// Genric with array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["a", "b", "c"]);
// console.log(firstNumber);
// console.log(firstString);
//Genric with keyof
// const Person = {name : "patel"}
// console.log(Person.name); // person["name"]
// function getProperty(obj : object, key : string){
//   return obj[key]
// }
// const res1 = getProperty({}, "name");
// console.log(res1); // undefined
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Patel", age: 21 };
var name1 = getProperty(person, "name");
var age = getProperty(person, "age");
console.log(name1, age);
