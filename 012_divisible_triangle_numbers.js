function triangleDivisors(n) {
  var testNum = 0,
      check = true,
      i = 1;
  while (check) {
    var testNum = triangleNum(i);
    if (divisors(testNum) > n)
      check = false;
    i++;
  }

  return testNum;
}

function triangleNum(n) {
  return (n*(n+1))/2;
}

function divisors(n) {

  var primeFactors = countPrimeFactors(n),
      divisors = 1;
  primeFactors.forEach(function(i) {
    divisors = divisors * (i+1);
  });

  return divisors;
}


function divisorsCheck(n) {

  var divisors = 0;
  for (var i = 1; i<=n; i++) {
    if (n%i === 0)
      divisors += 1;
  }
  return divisors;
}

function countPrimeFactors(n) {
  // Returns an array where each index is the number of prime factors
  // eg: [2,1,3] = 2 * 2 * 3 * 5 * 5 * 5
  // – NOTE - can skip primes eg: [1,1] could be 2 * 3, or 2 * 5, or any two unique factors.
  // –– adapted from exercise 005: Smallest Multiple
  //
  // n:int  ->  number to get factors for

  var factor = n,
      prevPrime = 2,
      primeFactorCount = [0],
      check = true,
      i = 0;

  if (n < 2)
    return [];

  while (check) {
    if (prevPrime === factor) {
      arrayIncrement(primeFactorCount, i);
      check = false;
    } else if (factor%prevPrime === 0) {
      arrayIncrement(primeFactorCount, i);
      factor = factor/prevPrime;
    } else {
      i++;
      prevPrime = firstPrimeFactor(factor, prevPrime+1);
    }
  }

  return primeFactorCount;
}

function arrayIncrement(array, index) {
  if (array[index] === undefined)
    array[index] = 1;
  else
    array[index] += 1;
}

// –––––––––––––––––––––––––––––––– //
// From 003: Largest Prime Factor   //
// –––––––––––––––––––––––––––––––– //

function firstPrimeFactor(n, start) {
  // Returns first (smallest) prime factor for given integer
  // – OR – returns given integer if no prime factor is found (ie: number is prime)
  //
  // n:int      ->  number to check for factors
  // start:int  ->  starting int -– TODO –– default to 0

  for (var i=start; i*i<=n; i++) {
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