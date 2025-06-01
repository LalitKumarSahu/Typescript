// oops - Interface-why we use interface?
// class to interface - implement
// interface to interface - extend

//kisis object ka representation interface ke andar

// interface Person{  // type Person = {
//   name : string;
//   age :  number;
//   greet(text : string): void
// }

// let user : Person;

// user = {
//   name :"lalit",
//   age : 18,
//   greet(text){
//     console.log(`${text} ${this.name}`);
//   }
// }
// console.log(user);
// user.greet("Hi there, I am");

//------------->
// interface Greetable {
//   name: string;
//   greet(text: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//       console.log(`${text} ${this.name}`);
//   }
// }

// const p1 = new Person("Aman");
// p1.greet("HI there I am")

//-------------------->
// interface Greetable {
//   readonly name: string;
//   greet(text: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//       console.log(`${text} ${this.name}`);
//   }
// }
// let user1 : Greetable;
// user1 = new Person("lalit");
//user1.name = "lalit mern stack"; error

// -------!Extending Interface----->

// interface Named{
//   readonly name : string;
// }
// interface Greetable extends Named{
//   greet(text : string) : void;
// }
// class Person implements Greetable{
//   name:string;
//   constructor(n : string){
//     this.name = n;
//   }
//   greet(text : string):void{
//     console.log(`${text}, ${this.name}`);
//   }
// }
// let user1 : Greetable;
// user1 = new Person("lalit")
// console.log(user1);

//------------>
//type addFun = (a : number, b : number) =>number;
//--or--
// interface addFun{
//   (a : number, b : number) :number
// }

// let add : addFun;

// add = (n1 : number, n2 : number) =>{
//   return n1 + n2;
// }
// console.log(add(10,20));

// --optional (?)---->
interface Named{
  readonly name : string;
  outputName ? : string
}
class Person implements Named{
  name : string;
  constructor(n : string){
    this.name = n;
  }
}
