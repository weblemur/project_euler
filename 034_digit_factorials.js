const digitFactorials = () => {
  const factorials = [1];
  let result = 0;
  for (let i=1; i<10; i++) factorials[i] = factorials[i - 1] * i;
  for (let i=3; i<factorials[9]; i++) {
    let factSum = i.toString().split('').reduce((sum, num) => sum + factorials[num], 0);
    if (factSum === i) result += i;
  }
  return result;
};

console.log(digitFactorials());
