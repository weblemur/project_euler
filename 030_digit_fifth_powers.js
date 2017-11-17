// brute force
function digitPowerSum(digit) {
  const digitPowers = [];
  const powerSums = [];
  for (let i=0; i<10; i++) {
    digitPowers.push(Math.pow(i, digit));
  }
  for (let i=2; i<2000000; i++) { // abitrary upper limit...
    const digits = i.toString().split('');
    const summedPowers = digits.reduce((acc, num) => acc + digitPowers[num], 0);
    if (summedPowers === i) powerSums.push(summedPowers);
  }
  return powerSums.reduce((acc, num) => acc + num);
}

console.log(digitPowerSum(5));
