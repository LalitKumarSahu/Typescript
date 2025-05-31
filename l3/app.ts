// UNION, LITERAL TYPES, TYPE ALIAS / CUSTOM TYPES

//-------union, | -> pipe in typescript-------->

function combine(num1 : number | string, num2 : number | string){
  let result;
  if(typeof num1 === "number" && typeof num2 === "number"){
    result = num1 + num2;
  }else{
    result = num1.toString() + num2.toString();
  }
  return result;
}
const sum = combine(10,20);
 const combineName = combine("lk", "mk");

 console.log(sum, combineName);

 // --------literal type---------------->

 function combine(num1 : number | string, num2 : number | string, conversionType : "as-number" | "as-string"){
  let result;
  if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
    result = +num1 + +num2;
  }else{
    result = num1.toString() + num2.toString();
  }
  return result;
}
const sum1 = combine(10,20, "as-number");
const sum2 = combine(10,40, "as-number");

 const combineName = combine("lk", "mk","as-string");

 console.log(sum1, sum2, combineName);

 //-----TYPE ALIAS /CUSTOM TYPES----->
 type combinable = number | string | boolean | string[];
 type conversionType = "as-number" | "as-string";
 function combine(num1 : combinable, num2 : combinable, conversionType :conversionType ){
  let result;
  if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
    result = +num1 + +num2;
  }else{
    result = num1.toString() + num2.toString();
  }
  return result;
}
const sum1 = combine(10,20, "as-number");
const sum2 = combine(10,40, "as-number");

 const combineName = combine("lk", "mk","as-string");

 console.log(sum1, sum2, combineName);


 //------------>
 type User = {
  name:string;
  age:number;
  skills : string[]
 }

 const user : User = {
  name : "lk",
  age : 20,
  skills:["React", "Node"]
 }

 function greet(user : User){
  console.log(`Hi, I am ${user.name}`);
 }
 greet(user);