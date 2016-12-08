// –– TODO –– Implement formula

function spiralDiagonalSums(n) {
  var layers = (n-1)/2,
      result = 1,
      k = 1;

  if (parseInt(layers) !== layers)
    return false;

  for (var i=1; i<=layers; i++)
    for (var j=0; j<4; j++) {
      k += i*2;
      result += k;
    }

  return result;
}