for (let i = 0; i < 5; i++) {
  console.log(i);
}

let array = ["a", "b", "c", "d"];
let obj = {
  name: "Atharva",
  roll: "12",
  phone: "0792424",
};

for (let i in obj) {
  console.log(i, ":", obj[`${i}`]);
}

for (let b of "Atharva") {
  console.log(b);
}
