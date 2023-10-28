// JavaScript is Dynamically Typed language

// var vs let vs const

var a = 1; // var have global scope and hence may create bugs
console.log(a); // a = 1
{
  var a = 2;
  console.log(a); // a = 2
}

console.log(a); // a = 2

// let and const have block scope

let b = 1;
console.log(b); // b = 1

{
  let b = 2;
  console.log(b); // b = 2
}

console.log(b); // b = 1

const c = 1;
// c = 2; // not allowed
console.log(`value of c is : ${c}`);
