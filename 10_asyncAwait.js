async function myFun() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("17 deg");
    }, 4000);
  });

  let goaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("34 deg");
    }, 7000);
  });

  console.log("Fetching delhi weather");
  let dW = await delhiWeather;

  console.log(dW);

  console.log("Fetching goa weather");
  let gW = await goaWeather;

  console.log(gW);
}

console.log("I am Program");

myFun().then(() => {
  console.log("Function complete");
});

// function startNewFuntion() {
//   setInterval(() => {
//     console.log("Executing new function");
//   }, 1000);
// }

// startNewFuntion();
