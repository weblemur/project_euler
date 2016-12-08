function findSumTriple(n) {
  // solution based on Euclid's formula
  
  var i, j, l, sum = 0, check = true,
      a = 0, b = 0, c = 0;

  for (i=1; check; i++) {

    // breaks if inner loop has run twice in a row
    // which occurrs when all leftover triples generated are too large
    if (i === j)
      break;

    for (j=i+1; check; j++) {
      setTriple(j, i);
      sum = a + b + c;

      if (n%sum === 0) {
        var div = n/sum;
        return [a*div, b*div, c*div];
      } else if (sum > n)
        break;
    }
  }

  return false;

  function setTriple(m, n) {
    a = m*m - n*n;
    b = 2*m*n;
    c = m*m + n*n;
  }
}

function productSumTriple(n) {
  var product = 1, triple = findSumTriple(n);
  if (triple)
    triple.forEach(function(i){ product = product * i });
  else
    product = triple;

  return product;
}