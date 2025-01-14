// Primitive Data Types - value
let somethingInJs = "Jane Doe"; // string
somethingInJs = 12; // number => 2^53 -1
somethingInJs = false; // boolean
somethingInJs = undefined; // undefined
somethingInJs = null; // null
somethingInJs = 123456789012345678901234567890n; // bigint

// let bigNumber = somethingInJs;
// bigNumber = 123456;

// console.log(typeof somethingInJs);
// console.log(bigNumber, "Big Number");
// console.log(somethingInJs, "BigInt");

// Non-Primitive DT - reference
// let numbers = [1, 2, 3, 4, 5, 6];

let myPet = { name: "George", breed: "German Sheperd", age: "6 months" };
myPet = {};
myPet2 = myPet;
myPet2.breed = "Pitbull";
console.log(myPet, "Pet 1");
console.log(myPet2, "Pet 2");

// const, let, var

// Global Scope     => var, let, const
// var someNameVar = "John Var";
// let someNameLet = "John Let";
// const someNameConst = "John Const";
// console.log(someNameVar);
// console.log(someNameLet);
// console.log(someNameConst);

// Function Scope   => var, let, const
// function someNameFunc() {
//   var someNameVar = "John Var";
//   let someNameLet = "John Let";
//   const someNameConst = "John Const";
//   console.log(someNameVar);
//   console.log(someNameLet);
//   console.log(someNameConst);
// }
// someNameFunc();

// Block Sopce      => let, const
// {
//   var someNameVar = "John Var";
//   let someNameLet = "John Let";
//   const someNameConst = "John Const";
// }

// console.log(someNameVar);
// console.log(someNameLet);
// console.log(someNameConst);
