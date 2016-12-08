function powerSum(num, pow) {
  var number = num.toString(),
      power = "1",
      result = 0,
      i;

  for (i=0; i<pow; i++)
    power = singleDigitMultiple(power, number);

  for (i=0; i<power.length; i++)
    result += parseInt(power[i]);

  return result;
}

function singleDigitMultiple(n,d) {
  var carryover = 0, digit, result = "";

  for (var i=n.length-1; i>=0; i--) {
    digit = parseInt(n[i]) * parseInt(d) + carryover;
    carryover = Math.floor(digit/10);
    result = digit%10 + result;
  }

  if (carryover > 0)
    result = carryover + result;

  return result;
}