// function add(num1, num2){
//   return num1 + num2;
// }
// const n1 = 5;
// const n2 = 30;
// const ans = add(n1, n2);
// console.log(ans);
//--------------->
// function add(num1, num2){
//   return num1 + num2;
// }
// const n1 = "5";
// const n2 = 30; //530
// const ans = add(n1, n2);
// console.log(ans);
// ---------------->
// function add(num1, num2){
//   if(typeof num1 === "number" && typeof num2 === "number"){
//        return num1 + num2;
//   }else{
//     return +num1 + num2
//   }
// }
// const n1 = "5";
// const n2 = 30; // 35
// const ans = add(n1, n2);
// console.log(ans);
//------------------>
// function add(num1 : number, num2 : number){
//     return num1 + num2;
// }
// const n1 = "5";
// const n2 = 30; // error
// const ans = add(n1, n2);
// console.log(ans);
//--------------------->
// function add(num1 : number, num2 : number){
//     return num1 + num2;
// }
// const n1 = 10;
// const n2 = 30; // 40
// const ans = add(n1, n2);
// console.log(ans);
//--------------------->
// function add(num1 : number, num2 : number, printResult : boolean){
//    if(printResult){
//     console.log(num1 + num2);
//    }else{
//        return num1 + num2;
//    }
// }
// const n1 = 10;
// const n2 = 30; 
// const printResult = true;
//  add(n1, n2, printResult);
//-------------------->
// function add(num1, num2, printResult, someText) {
//     if (printResult) {
//         console.log("".concat(someText, " ").concat(num1 + num2));
//     }
//     else {
//         return num1 + num2;
//     }
// }
// var n1 = 10;
// var n2 = 30;
// var printResult = true;
// var someText = "Sum of two number is = ";
// add(n1, n2, printResult, someText);
