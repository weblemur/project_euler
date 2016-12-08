function largestPrimeFactor(n) {
  var factor = n, largestPrime = 1;
  while (true) {
    largestPrime = firstPrimeFactor(factor, largestPrime)
    if (largestPrime === factor) {
      break;
    } else {
      factor = factor/largestPrime;
    }
  }

  return largestPrime;
}

function firstPrimeFactor(n, prevPrime) {
  for (var i = prevPrime; i < n/2; i++) {
    if (!isPrime(i)) {
      continue;
    } else if (n%i === 0) {
      return i;
    }
  }
  return n;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n%2 === 0 || n%3 === 0) {
    return false;
  }
  for (var i=5; i*i<=n; i+=6) {
    if (n%i === 0 || n%(i+2) === 0) {
      return false;
    }
  }
  return true;
}