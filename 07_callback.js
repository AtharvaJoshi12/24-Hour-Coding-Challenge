function loadScript(src, callback) {
  setTimeout(() => {
    console.log("Script is loaded : ", src);
    callback();
  }, 3000);
}

function runAfterLoadScript() {
  console.log("Your Script is Loaded Successfully and working clean.");
}

console.log("Program Started");

loadScript("https//myscript.js", runAfterLoadScript);
