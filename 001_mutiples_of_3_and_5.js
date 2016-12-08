function multiplesOf3And5(range) {
  var i, sum = 0;
  for (i=1; i<range; i++) {
    if (i%3 === 0 || i%5 === 0) {
      sum += i;
    }
  }
  return sum;
}