function nonAbundantSums() {
  var range = 20161,
      abundantNums = [],
      abundantSums = Array(range+1).fill(false),
      result = 0;

  for (var i=1; i<=range; i++)
    if (sumOfDivisors(i) > i)
      abundantNums.push(i);

  for (var i=0; i<abundantNums.length; i++)
    for (var j=0; j<=i; j++)
      if (abundantNums[i] + abundantNums[j] <= range)
        abundantSums[abundantNums[i] + abundantNums[j]] = true;
      else
        break;

  for (var i=1; i<=range; i++)
    if (!abundantSums[i])
      result += i;

  return result;
}

// function nonAbundantSums() {
//   var range = 20161,
//       abundantNums = abundantNumbers(range),
//       result = 0;
//   for (var i=1; i<=range; i++) {
//     if (i > 46 && i%2 === 0) continue;
//     var check = true;
//     for (var j in abundantNums) {
//       var num = abundantNums[j];
//       if (num > i/2) break;
//       if (abundantNums.indexOf(i - num) !== -1) {
//         check = false;
//         break;
//       };
//     }
//     if (check) result += i;
//   }

//   return result;
// }

// function abundantNumbers(range) {
//   var result = [];
//   for (var i=1; i<=range; i++) {
//     if (sumOfDivisors(i) > i)
//       result.push(i);
//   }

//   return result;
// }

function sumOfDivisors(n) {
  var self = Number(n),
      sum = 1,
      p = 2,
      j;
  while (p*p<=n && n>1) {
    if (n%p == 0) {
      j=p*p;
      n=n/p;
      while (n%p == 0) {
        j=j*p;
        n=n/p;
      }
      sum=sum*(j-1);
      sum=sum/(p-1);
    }
    if(p == 2)
      p=3;
    else
      p=p+2;
  }
  if(n>1)
    sum=sum*(n+1);
  return sum - self;
}