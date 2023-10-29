for (let i = 0; i < 5; i++) {
  console.log(i);
}

let array = ["a", "b", "c", "d"];
let obj = {
  name: "Atharva",
  roll: "12",
  phone: "0792424",
};

// for in loop
for (let i in obj) {
  console.log(i, ":", obj[`${i}`]);
}

// for of loop
for (let b of "Atharva") {
  console.log(b);
}

// for each loop
array.forEach((element) => {
  console.log(element);
});
