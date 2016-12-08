function largestPalindromeProduct(digits) {
  var palindrome = findLargestProduct(digits, isPalindrome);
  return palindrome;
}

function isPalindrome(number) {
  // **TODO** – trim leading zeroes
  var numberString = number.toString();
  var reversedString = numberString.split("").reverse().join("");
  return number === Number(reversedString);
}

function findLargestProduct(digits, check) {
  // digits:int     –> limit on digit length of inputs
  // check:function -> callback function: returns bool to determine correct result

  var largestNum = "",
      checkNum = 0,
      product = 0,
      i = 1, j = 1;

  for (i=0; i<digits; i++)
    largestNum += "9";

  largestNum = parseInt(largestNum);

  for (i=largestNum; i>0; i--) {
    for (j=i; j>0; j--) {
      checkNum = i*j;
      if (checkNum < product) break;
      if (check(checkNum)) product = checkNum;
    }
    if (i===j) break;
  }

  return product;
}