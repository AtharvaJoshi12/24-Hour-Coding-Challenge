// In simple words callback means passing a function as an argument to another function.

// function loadScript(src, callback) {
//   setTimeout(() => {
//     console.log("Script is loaded : ", src);
//     callback();
//   }, 3000);
// }

// function runAfterLoadScript() {
//   console.log("Your Script is Loaded Successfully and working clean.");
// }

// console.log("Program Started");

// loadScript("https//myscript.js", runAfterLoadScript);

// Pyramid of doom or Callback hell - When we have callback inside callbacks, the code gets difficult to manage.

function loadScript(src, callback) {
  setTimeout(() => {
    console.log("Script is loaded : ", src);
    callback(false, src);
  }, 3000);
}

console.log("Program Started");

loadScript("https//myscript.js", function runAfterLoadScript(error, src) {
  if (error) console.log("Error");
  loadScript("https//myscript2.js", function runAfterLoadScript(error, src) {
    if (error) console.log("Error");
    loadScript("https//myscript3.js", function runAfterLoadScript(error, src) {
      if (error) console.log("Error");
      loadScript(
        "https//myscript4.js",
        function runAfterLoadScript(error, src) {
          if (error) console.log("Error");
          loadScript(
            "https//myscript5.js",
            function runAfterLoadScript(error, src) {
              if (error) console.log("Error");
              else
                console.log(
                  "Your Script is Loaded Successfully and working clean.",
                  src
                );
            }
          );
        }
      );
    });
  });
});

// To deal with this we can use Promises or Async Await
