const digitFactorials = () => {
  const factorials = [1];
  for (let i=1; i<10; i++) factorials[i] = factorials[i - 1] * i;
  const results = [];
  for (let i=3; i<factorials[9]; i++) {
    let factSum = i.toString().split('').reduce((sum, num) => sum + factorials[num], 0);
    if (factSum === i) results.push(i);
  }
  return results.reduce((sum, num) => sum + num);
};

console.log(digitFactorials());
