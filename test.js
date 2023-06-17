// console.log(b) //G,S,M:undefined 
// var b;

// let a
// console.log(a) //G:referror
// a=10


// function example() {
//     let x;
//     console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
//     x = 10;
//     console.log(x); // Output: 10
//   }
  
//   example();
  

// x = 23; // Gives reference error

// console.log(x)

// let x;

// function anotherRandomFunc(){
//   message = "Hello"; // Throws a reference error

//   let message;
// }
// anotherRandomFunc();



// const a=1+2+"3"; 
// console.log(typeof(a)); // G:number, M:string ,S: string
// console.log(a); // GM: 3er S:12er
// const b="2"+1+2;
// console.log(typeof(b)) //G:string M:string S:string
// console.log(b) //G:212 M: 23 S: 212


// const str1 = "10";
// const str2 = 5;
// const str3 = "Mahi";

// const result = str1 - str2 + str3;

// console.log(result); // Output: 

//Mahi : 5Mahi
//Gaurav : 5Mahi
//Sidharth : 5Mahi
//Shrey : 5Mahi

//Mahi : NaN
//Gaurav : NaN
//Sidharth : NaN
//Shrey : NaN 


//Mahi : still 5
//Gaurav : NaN
//Sidharth : NaN
//Shrey : 5



//Mahi : thinks 5
//Gaurav : NaN
//Sidharth : NaN
//Shrey : 5

// Shrey1()

// console.log(Shrey1)
// //G :Hello M :Hello S : Hello

// // //G :refe M : S : 
// // Shrey3();
// //G : M : S : 
// // var Shrey1 = () => {
// //     console.log("Hello")
// // }


// function Shrey1(){return "Hello"}
// console.log(Shrey1)
// var Shrey1 = () => {
//     return "Hello"
//     // console.log("Hello")
// }
// console.log(Shrey1)
// var Shrey1 = function(){
//     return "Hello"
// }


// let Shrey2 = () => {
//     console.log("Namaste")
//     // return "Namaste"
// }

// // Shrey2();
// console.log(Shrey2);
// console.log(Shrey2());

// const Shrey3 = () => {
//     console.log("Hola")
// }


// console.log(multiplyBy2(5));
// var multiplyBy2 = function(num){
//     return num * 2;
//   }

//   var multiplyBy2 = function(num){
//     return num * 2;
//   }
// Arrow function expression
// var arrowMultiplyBy2 = num => num * 2;

const numbers = [1, 2, 3, 4, 5];

const hasNumber = numbers.includes(3);
console.log(hasNumber); // Output: true
