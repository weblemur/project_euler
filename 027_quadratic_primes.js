// –– TODO ––– in equation, b must be prime

function quadraticPrimes(range) {
  var a = 0, b = 0,
      longestSeries = 0,
      result = [];

  for (a=0; a<range; a++) {
    for (b=0; b<range; b++) {
      testSeriesLength(a,b);
      testSeriesLength(-a,b);
      testSeriesLength(a,-b);
      testSeriesLength(-a,-b);
    }
  }
  return result;

  function primeSeries(x,y) {
    var n=0;
    while (true)
      if (isPrime(n*n+x*n+y))
        n++;
      else
        break;

    return n;
  }

  function testSeriesLength(x,y) {
    var series = primeSeries(x,y);

    if (series > longestSeries) {
      longestSeries = series;
      result = [x, y];
    }
  }
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