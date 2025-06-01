var userInput;
// let userInput : any;
var userName;
userInput = 10;
userInput = "lalit";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
