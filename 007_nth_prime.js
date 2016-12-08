function nthPrime(n) {
  if (n === 1)
    return 2;
  else {
    var i = n - 1;
        j = 1;

    do {
      j += 2;
      if (isPrime(j))
        i--;
    } while (i>0);
    
    return j;
  }
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