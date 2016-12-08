function sumSquareDifference(range) {
  return squareSum(range) - sumSquares(range);
}

function sumSquares(n) {
  return (n*(n+1)*(n+n+1))/6;
}

function squareSum(n) {
  return Math.pow((n*(n+1))/2, 2);
}