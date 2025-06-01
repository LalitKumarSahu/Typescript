
// ------function return type------>


function add(num1 : number, num2 : number) : number{
  return num1 + num2;
}
add(10,20);

function greet(name : string) : void{
  console.log(`Hi ${name}`);
}
greet("lalit");


//let combineFunction : Function;
//combineFunction = 10; // invalid
//combineFunction = function(){};// valid
//combineFunction = add; // valid
//combineFunction = greet; // valid

//console.log(combineFunction(1,2));


//---- Good practice--------> 

let combineFunction : (a:number, b:number) =>number;
combineFunction = add;
console.log(combineFunction(100,200));

//-----function type & callbacks------>
function addHandle(num1:number, num2:number, cb :(n:number)=>void){
  const result = num1 + num2;
  cb(result);
}
addHandle(10,20, (result : number)=>{
  console.log(result);
})

