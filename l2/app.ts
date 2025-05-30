// Object, Array, Tuple, Enum

//console.log("lets learn object....");

//----------------------->
const person = {
  firstName : "lalit",
  age:18
};
console.log(person.lastName); // undefined

//------------------------->
const person : {
  firstName: string;
  age: number;
  xyz : {
    address : string;
  }
} = {
  firstName: "lalit",
  age: 18,
  xyz:{
    address : "Mumbai"
  }
};
console.log(person);


//------------------------->
const person : {
  firstName: string;
  age: number;
  skills: string[];
} = {
  firstName: "lalit",
  age: 18,
  skills: ["Reactjs", "Nodejs"]

};
let favLang  : string[]
favLang = ["Hindi", "English"];

let favLang  : any[] // loose ts powerfull
favLang = ["Hindi", "English", 21, true];

console.log(person);

//--------touple------------------>
const person : {
  name : string;
  age : number;
  skills : string[];
  product : [number, string] // fixed array of two types 0-number, 1-string

} = {
  name:"@lk",
  age:18,
  skills:["html", "css"],
  product : [10, "leptop"],
}
person.product = [10, "leptop", "phone"]; // invalid
person.product[1] = 20; // invalid

//------------enum-------------->
enum Role {ADMIN, AUTHOR, READ_USER_ONLY};

const person  = {
  name:"@lk",
  age:18,
  skills:["html", "css"],
  product : [10, "leptop"],
  role:Role.AUTHOR
  
}
if(person.role === Role.AUTHOR){
  console.log("Author");

}else if(person.role === Role.ADMIN){
  console.log("Admin");

}else if(person.role === Role.READ_USER_ONLY){
   console.log("Read user only");
}