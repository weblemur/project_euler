function longestCollatzSequence(l) {
  // Test only odd numbers?
  // Use hash map?
  var longest = 0,
      result = 0;

  for (var i = 1; i<= l; i++) {
    var check = true,
        n = i,
        test = 0;
    while (check) {
      test++;
      if (n === 1)
        check = false;
      else if (n%2 === 0)
        n = n/2;
      else
        n = n * 3 + 1;
    }

    if (test > longest) {
      longest = test;
      result = i;
    }
  }


  return result;
}