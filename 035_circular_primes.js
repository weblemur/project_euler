const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n%2 === 0 || n%3 === 0) return false;
  for (var i=5; i*i<=n; i+=6) {
    if (n%i === 0 || n%(i+2) === 0) return false;
  }
  return true;
};

const circularPrimes = (range) => {
  const found = new Set([2]);
  if (range < 3) return 0;
  for (let i=3; i<range; i+=2) {
    if (!found.has(i) && isPrime(i)) {
      let rotations = [i];
      let digits = i.toString().split('');
      for (let j=1; j<digits.length; j++) {
        let newNum = +digits.slice(j).concat(digits.slice(0, j)).join('');
        if (isPrime(newNum)) rotations.push(newNum);
        else break;
      }
      if (rotations.length === digits.length) {
        rotations.forEach(num => found.add(num));
      }
    }
  }
  return found.size;
};

console.log(circularPrimes(1000000));
