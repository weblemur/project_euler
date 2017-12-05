const isPalindrome = (str) => {
  for (let i=0; i<str.length/2; i++) {
    if (str[i] !== str[str.length - (i + 1)]) return false;
  }
  return true;
};

const doublePalindromes = (range) => {
  let sum = 0;
  for (let i=1; i<range; i++) {
    if (isPalindrome(i.toString(10)) && isPalindrome(i.toString(2))) sum += i;
  }
  return sum;
};

console.log(doublePalindromes(1000000));
