function evenFibonacci(range) {
  var n=2, p=0, sum=0, temp;
  while (n<range) {
    console.log(n);
    sum += n;
    temp = n;
    n = 4*n + p;
    p = temp;
  }
  return sum;
}