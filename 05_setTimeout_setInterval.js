// setTimeout
/* The global setTimeout() method sets a timer which executes 
 a function or specified piece of code once the timer expires. */

console.log("Hi");

setTimeout(() => {
  console.log("I am setTimeout");
}, 3000);

const printFunction = () => {
  console.log("I am setTimeout 2");
};

setTimeout(printFunction, 4000);

// we can use  clearTimeout() to cancel the execution of setTimeout

// setInterval
/* The setInterval() method, offered on the Window and Worker interfaces,
 repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. */

let countDown = 0;
let interval = setInterval(() => {
  console.log(++countDown);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 7000);
