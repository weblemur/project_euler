function multipleCheck(number, range) {
  for (var i=1; i<=range; i++) {
    if (number%i != 0)
      return false;
  }

  return true;
}

function smallestMultiple(range) {
  // Returns the smallest number that is multipliable by every number from 1 to ~range~

  var smallestMultiple = 1,
      primeFactors = [];

  for (var i=2; i<=range; i++)
    primeFactors = primeFactors.concat(missingFactors(primeFactors, findPrimeFactors(i)));

  primeFactors.forEach(function(i) {
    smallestMultiple *= i;
  });
  return smallestMultiple;
}

function missingFactors(array, check) {
  // Returns and array of factors second array not present in first
  // – NOTE – checks for uniqueness as well

  var factors = Array.from(array),
      factorIndex,
      missingFactors = [];

  check.forEach(function(i) {
    factorIndex = factors.indexOf(i);
    if (factorIndex === -1)
      missingFactors.push(i);
    else
      delete factors[factorIndex];
  });

  return missingFactors;
}


function findPrimeFactors(n) {
  // Returns an array of prime factors for given integer
  // –– adapted from exercise 003: Largest Prime Factor
  //
  // n:int  ->  number to get factors for

  var factor = n,
      prevPrime = 1,
      primeFactors = [];
  while (true) {
    prevPrime = firstPrimeFactor(factor, prevPrime);
    primeFactors.push(prevPrime);

    if (prevPrime === factor)
      break;
    else
      factor = factor/prevPrime;
  }

  return primeFactors;
}

// –––––––––––––––––––––––––––––––– //
// From 003: Largest Prime Factor   //
// –––––––––––––––––––––––––––––––– //

function firstPrimeFactor(n, start) {
  // Returns first (smallest) prime factor for given integer
  // – OR – returns given integer if no prime factor is found (ie: number is prime)
  //
  // n:int      ->  number to check for factors
  // start:int  ->  starting int

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