// map

// Creates a new array by performing some opeation on each array element.

const a = [1, 2, 3, 4, 5, 6];

b = a.map((element) => {
  return element + 100;
});

console.log(b);

ans = a.filter((element) => {
  return element < 4;
});

console.log(ans);

newAns = a.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(newAns);
