// Promise Chaining

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promoise 1 resolved");
//     resolve(56);
//   }, 2000);
// });

// p1.then(() => {
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promoise 2 resolved");
//       resolve(56);
//     }, 3000);
//   });
// });

// loadscript function using Promises

function loadScript(src, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Script is loaded : ", src);
      if (error) reject();
      else resolve(src);
    }, 3000);
  });
}

let p1 = loadScript("https//myscript.js", false);
p1.then((value) => {
  console.log(value);
  return loadScript("https//myscript2.js", false);
})
  .then((value) => {
    console.log(value);
    return loadScript("https//myscript3.js", false);
  })
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    console.log("Some error");
  });
