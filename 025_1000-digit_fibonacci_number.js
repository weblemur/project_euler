// function fibonacciDigits(d) {
//   var check = true,
//       digits = 1,
//       i = 1,
//       prev = 0, num = 1;

//   while (check) {
//     num += prev;
//     prev = num - prev;
//     i++;
//     if (num.toString().length > d)
//       check = false;
//   }

//   return [i, num];
// }

function fibonacciDigits(d) {
  var i = 1,
      xxx = Math.log(5)/2,
      phi = (1+Math.sqrt(5))/2,
      dig = function (n) { return Math.floor((n*Math.log(phi)-xxx)/Math.log(10)+1) };

  while (dig(i) < d)
    i++;

  return i;
}