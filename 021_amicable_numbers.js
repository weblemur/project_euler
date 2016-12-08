// –– TODO –– Better divisors function that utilizes prime numbers 

function amicableSum(n) {
  return sum(amicableNumbers(n))
}

function amicableNumbers(n) {
  var nums = [],
      dSum, i;
  for(i=1; i<=n; i++) {
    dSum = sum(divisors(i));
    if (i < dSum && i === sum(divisors(dSum)))
      nums.push(i, dSum);
  }

  return nums;
}

function divisors(n) {
  var divisors = [1],
      lim = Math.floor(Math.sqrt(n)),
      i;

  if (lim === n) {
    divisors.push(lim);
    lim = lim - 1;
  }

  for (i=2; i<lim; i++)
    if (n%i===0)
      divisors.push(i);

  return divisors;
}

function sum(array) {
  var sum = 0;
  array.forEach(function(i) { sum += i });
  return sum;
}