// Destructuring

let arr = [1, 2, 3, 4];
let [a, b] = arr;

console.log(a, b);

let myObj = { c: 100, d: 200 };
let { c, h, d } = myObj;

console.log(c, h, d);

// Spread Operator

let newArr = [2, 34, 23, 45, 23, 66];
let newObj = { ...newArr };

console.log(newObj);

let values = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...values));
