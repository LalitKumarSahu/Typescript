let userInput : unknown;
// let userInput : any;
let userName : string;

userInput = 10;
userInput = "lalit";

if(typeof userInput === "string"){
  userName = userInput;
}

function generateaError(message : string, code : number) : never{
  throw {message : message, statusCode : code}
}
const res = generateaError("Internal server error", 500);
console.log(res);
