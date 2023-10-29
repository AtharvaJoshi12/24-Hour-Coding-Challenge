// Promise Chaining

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promoise 1 resolved");
    resolve(56);
  }, 2000);
});

p1.then(() => {
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promoise 2 resolved");
      resolve(56);
    }, 3000);
  });
});
