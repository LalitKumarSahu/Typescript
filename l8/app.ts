//-------Genric intro------->
// one type is connected to another type is calles genric

type Person = {
  name: string;
  age: number;
};
const Boy: Person = {
  name: "ShivA",
  age: 18,
};
// const fruits : Array<Boy> = [{name : "vivek",age : 12}];
// console.log(fruits)

const fruits: Array<Person> = [{ name: "vivek", age: 12 }];
//console.log(fruits);

// const fruits : Array<string> = []
// fruits.push("Mango");
// fruits.push("banana");
// fruits.push("Apple");
// fruits.push("anannas");

// console.log(fruits)

//eg2
function merge<T, U, S>(objA: T, objB: U, objC: S) {
  return { ...objA, ...objB, ...objC };
}
const res = merge(
  { name: "patel" },
  { role: "software engineer" },
  { id: "cmsmsl" }
);
//console.log(res);

// 2.Genric Constraints
function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}
const obj = createObject("age", 25, true);
//console.log(obj);

// 3.Genric Interface
interface Box<T> {
  value: T;
}
const numberBox: Box<number> = { value: 200 };
//console.log(numberBox);

const stringBox: Box<string> = { value: "Dummy" };
//console.log(stringBox);

const objBox: Box<object> = { value: { name: "lalit" } };
// console.log(objBox);

// Genric Default
interface User<T = string>{
  data : T,
  status : number
}
const response : User = {data : "success", status:200 } // default string

const jsonRes : User<object> = {data : {key :"value"},status : 200};
console.log(response);
console.log(jsonRes);

type Person2 ={
  name : string;
  age : number
}
const objRes : User<Person2> = {data : {name:"lalit",age:18},status : 200};
// console.log(objRes);


//4.Genric with class
class Container<T>{
  private content : T;
  constructor(content : T){
    this.content =  content
  }
  getContent() : T{
    return this.content;
  }
}

const stringContainer = new Container<string>("hello");
console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100);
// console.log(numberContainer.getContent());

// Genric with array
function getFirst<T>(arr : T[] ) : T{
  return arr[0];
}

const firstNumber = getFirst([1,2,3,4]);
const firstString = getFirst(["a","b","c"]);
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

function getProperty<T extends object, K extends keyof T>(obj : T, key : K) : T[K]{
  return obj[key]
}
const person = {name:"Patel", age : 21};
const name1 = getProperty(person, "name");
const age = getProperty(person, "age");

console.log(name1,age); 



