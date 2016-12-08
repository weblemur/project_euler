function longestReciprocalCycle(n) {
  var longestCycle = 1, result = 3;

  function check10mod(a,b) {
    return Math.pow(10,a)%b;
  }

  for (var i=7; i<n; i+=2) {
    if (isPrime(i)) {
      var div = 1, cycle = 0;

      do {
        cycle++;
        div = (div*10)%i;
      } while (div !== 1);

      if (longestCycle < cycle) {
        longestCycle = cycle;
        result = i;
      }
    }
  }

  return result;
}

function isPrime(n) {
  // trimmed version
  if (n%3 === 0)
    return false;
  for (var i=5; i*i<=n; i+=6)
    if (n%i === 0 || n%(i+2) === 0)
      return false;

  return true;
}