var userInput;
// let userInput : any;
var userName;
userInput = 10;
userInput = "lalit";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateaError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateaError("Internal server error", 500);
console.log(res);
