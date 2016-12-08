function factoralSum(n) {
  var digits = factoral(n).split(""),
      result = 0;

  digits.forEach(function(i) {
    result += parseInt(i);
  })

  return result;
}

function factoral(n) {
  var result = "1";

  for (var i=1; i<=n; i++) {
    result = bigMultiply(result, i.toString());
  }

  return result; 
}

function bigMultiply(n1, n2) {
  var length = n2.length,
      newNum = "0"
      result = "";
  for (var i=length-1; i>=0; i--) {
    newNum = singleDigitMultiple(n1, n2[i]);
    for (var j=i+1; j<length; j++)
      newNum = newNum + "0";
    result = bigAdd(result, newNum);
  }

  return result;
}

function bigAdd(n1, n2) {
  var num1 = n1,
      num2 = n2,
      carryover = false,
      result = "",
      remain = "", digit, i;

  if (!num1)
    return num2;

  if (num1.length>num2.length) {
    num1 = n1.slice(-n2.length);
    remain = n1.slice(0, -n2.length);
  } else {
    num2 = n2.slice(-n1.length);
    remain = n2.slice(0, -n1.length);
  }

  for (i=num1.length-1; i>=0; i--) {
    digit = parseInt(num1[i]) + parseInt(num2[i]);
    if (carryover)
      digit += 1;

    carryover = digit > 9;
    result = digit%10 + result;
  }

  if (carryover)
    remain = bigAdd(remain, "1");

  return remain + result;
}

// –––––––––––––––––––––––––––––––– //
// From 016: Power Digit Sum        //
// –––––––––––––––––––––––––––––––– //

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