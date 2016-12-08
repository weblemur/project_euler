function lexiPermutation(n, p) {
  var permutation = p - 1,
      num = n,
      numbers = [],
      factorial = [1],
      result = [];

  for (var i = 0; i<=n; i++) {
    numbers.push(i);
    if (i>0)
      factorial.push(factorial[i-1]*i);
  }

  if (factorial[n] * (n+1) < p || p < 1)
    return false;

  for (var i = n; i>=0; i--) {
    result = result.concat(numbers.splice(Math.floor(permutation/factorial[i]), 1));
    permutation = permutation%factorial[i];
  }

  return result;
}