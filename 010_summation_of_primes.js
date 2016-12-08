function sumOfPrimes(limit) {
  var i = 3,
      sum = 2;

  if (limit <= 2)
    return 0;

  while (i<limit) {
    if (isPrime(i))
      sum += i;
    i += 2;
  }
    
  return sum;
}

function isPrime(n) {
  if (n <= 1)
    return false;
  else if (n <= 3)
    return true;
  else if (n%2 === 0 || n%3 === 0)
    return false;

  for (var i=5; i*i<=n; i+=6)
    if (n%i === 0 || n%(i+2) === 0)
      return false;

  return true;
}