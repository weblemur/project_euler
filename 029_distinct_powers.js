// With Object

// function distinctPowers(a, b) {
//   let values = {};

//   for (let i=2; i<=a; i++) {
//     for (let j=2; j<=b; j++) {
//       values[Math.pow(i, j)] = true;
//     }
//   }
//   return Object.keys(values).length;
// }

// With ES6 Set

function distinctPowers(a, b) {
  let values = new Set();

  for (let i=2; i<=a; i++) {
    for (let j=2; j<=b; j++) {
      values.add(Math.pow(i, j));
    }
  }
  return values.size;
  // Doesn't work – perhaps an issue with large number handling?
}

console.log(distinctPowers(100, 100));
