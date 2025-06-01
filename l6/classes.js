"use strict";
//----Basic class---->
// class Department{
//   name:string;
//   constructor(n : string){
//     this.name = n;
//   }
//   describe(this:Department){ // method
//     console.log("Department", this.name);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// const accountingCopy = {
//   name:"dummy",
//   descibe : accounting.describe
// }
//-----private,public access modyfiers--------------->
// class Department{
//   public name:string;
//   private employees : string[];
//   constructor(n : string){
//     this.name = n;
//     this.employees = [];
//   }
//   describe(this:Department){ // method
//     console.log("Department", this.name);
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// accounting.addEmployee("lalit");
// accounting.addEmployee("kumar");
// accounting.printEmployeeInformation();
// accounting.employees = ["xfmld"];
// accounting.printEmployeeInformation();
//-----short hand------->
// class Department{
//   constructor( public name:string,private employees : string[]){
//   }
//   describe(this:Department){ // method
//     console.log("Department", this.name);
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// accounting.addEmployee("lalit");
// accounting.addEmployee("kumar");
// accounting.printEmployeeInformation();
// accounting.employees = ["xfmld"];
// accounting.printEmployeeInformation();
//---------Readonly------------->
// class Department{
//  public name:string;
//  private employees : string[];
//  private readonly id : string;
//   constructor(n : string){
//     this.name = n;
//     this.id = "d2"; // only once you can initialize
//     this.employees = [];
//   }
//   describe(this:Department){ // method
//     // this.id = "d2"; // invalid
//     console.log("Department", this.name);
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// accounting.addEmployee("lalit");
// accounting.addEmployee("kumar");
// accounting.printEmployeeInformation();
// ----inheritance- Override prop & protected---->
// class Department{
//  public name:string;
//  private employees : string[];
//  private readonly id : string;
//   constructor(id : string, n : string){
//     this.name = n;
//     this.id = id; // only once you can initialize
//     this.employees = [];
//   }
//   describe(this:Department){ // method
//     // this.id = "d2"; // invalid
//     //console.log("Department", this.name); 
//     console.log(`Department (${this.id}), ${this.name}`); 
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// class AccountingDepartment extends Department{ //all prop & method
//       // reports : string[] = [];
//       constructor(id : string, private reports : string[]){
//         super(id, "Accounting");
//       }
//       addReports(text : string){
//         this.reports.push(text);
//       }
//       printReports(){
//         console.log(this.reports);
//       }
// }
// const accDep = new AccountingDepartment("d1", []);
// accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe()
//--------overide & protected--------------------->
// class Department{
//  public name:string;
//  //private employees : string[]; // private hai to keval dep vale class me access hoga acDp vale me nhi hoga
// protected employees : string[]; // protected hai to dono dep vale class me access hoga aur acDp vale me bhi hoga
//  private readonly id : string;
//   constructor(id : string, n : string){
//     this.name = n;
//     this.id = id; // only once you can initialize
//     this.employees = [];
//   }
//   describe(this:Department){ // method
//     // this.id = "d2"; // invalid
//     //console.log("Department", this.name); 
//     console.log(`Department (${this.id}), ${this.name}`); 
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// class AccountingDepartment extends Department{ //all prop & method
//       // reports : string[] = [];
//       constructor(id : string, private reports : string[]){
//         super(id, "Accounting");
//       }
//       addReports(text : string){
//         this.reports.push(text);
//       }
//       printReports(){
//         console.log(this.reports);
//       }
//       addEmployee(emp: string): void {
//           if(emp === "lalit"){
//             return;
//           }
//           this.employees.push(emp);
//       }
// }
// const accDep = new AccountingDepartment("d1", []);
// accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe()
// accDep.addEmployee("lalit");
// accDep.printEmployeeInformation();
// accDep.addEmployee("harshit");
// accDep.printEmployeeInformation();
//------- setter and geeter---------->
// class Department{
//  public name:string;
//private employees : string[]; // private hai to keval dep vale class me access hoga acDp vale me nhi hoga
// protected employees : string[]; // protected hai to dono dep vale class me access hoga aur acDp vale me bhi hoga
//  private readonly id : string;
//   constructor(id : string, n : string){
//     this.name = n;
//     this.id = id; // only once you can initialize
//     this.employees = [];
//   }
//   describe(this:Department){ // method
//     // this.id = "d2"; // invalid
//     //console.log("Department", this.name); 
//     console.log(`Department (${this.id}), ${this.name}`); 
//   }
//   addEmployee(emp : string){
//     this.employees.push(emp);
//   }
//   printEmployeeInformation(){
//     console.log('Number of emp : ', this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting", []);
// accounting.describe();
// class AccountingDepartment extends Department{ //all prop & method
//       // reports : string[] = [];
//       constructor(id : string, private reports : string[]){
//         super(id, "Accounting");
//       }
//       addReports(text : string){
//         this.reports.push(text);
//       }
//       printReports(){
//         console.log(this.reports);
//       }
//       addEmployee(emp: string): void {
//           if(emp === "lalit"){
//             return;
//           }
//           this.employees.push(emp);
//       }
//       get getReports(){
//         if(this.reports.length > 0){
//           return this.reports;
//         }
//         throw new Error("Report not found");
//       }
//       set setReports(value : string){
//         if(!value){
//           throw new Error("please pass valid value")
//         }
//         this.reports.push(value);
//       }
// }
// const accDep = new AccountingDepartment("d1", []);
// accDep.addReports("Bugs");
// // accDep.printReports();
// // accDep.describe()
// accDep.addEmployee("lalit");
// accDep.printEmployeeInformation();
// accDep.addEmployee("harshit");
// // accDep.printEmployeeInformation();
// //setter and getter method
// // console.log("getter ->", accDep.getReports);
// // accDep.setReports = "";
// console.log("getter ->", accDep.getReports);
// accDep.setReports = "Code review error";
// console.log("getter ->", accDep.getReports);
//---static method----->
class Department {
    constructor(id, n) {
        this.name = n;
        this.id = id; // only once you can initialize
        this.employees = [];
    }
    describe() {
        // this.id = "d2"; // invalid
        //console.log("Department", this.name); 
        console.log(`Department (${this.id}), ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log('Number of emp : ', this.employees.length);
        console.log(this.employees);
    }
    static getSalary() {
        return { salary: 50000 };
    }
}
// without creating object, we can access by it's class name
const salary = Department.getSalary();
console.log(salary);
//------ abstract classes------>
class Department2 {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
}
class Subclass extends Department2 {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Department", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const subclass = new Subclass("D1", []);
subclass.describe();
