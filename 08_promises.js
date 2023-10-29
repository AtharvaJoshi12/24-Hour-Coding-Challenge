let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("I am promise 1 And I am fullfilled");
    resolve(true);
    // reject(new Error("I am error"));
  }, 3000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("I am promise 2 And I am fullfilled");
    resolve(true);
    // reject(new Error("I am error"));
  }, 4000);
});

console.log(p1);
console.log(p2);

p1.then((value) => {
  console.log(value);
});

p2.then((value) => {
  console.log(value);
});

p1.catch((error) => {
  console.log("Some error");
});
