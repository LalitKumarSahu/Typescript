let userInput : unknown;
// let userInput : any;
let userName : string;

userInput = 10;
userInput = "lalit";

if(typeof userInput === "string"){
  userName = userInput;
}

function generateError(message : string, code : number) : never{
  throw {message : message, statusCode : code}
}
const res = generateError("Internal server error", 500);
console.log(res);
