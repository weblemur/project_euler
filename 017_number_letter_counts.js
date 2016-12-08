function totalNumberLetterCounts(n) {
  var result = 0;

  for (var i=1; i<=n; i++) {
    result += numberLetterCounts(i);
  }
  
  return result;
}

function numberLetterCounts(n) {
  // Counts number of letters used to write out given number
  // (not including spaces and hyphens)

  // if ( n > 1000) return "ya blew it!";

  var numberString = n.toString(),
      length = numberString.length,
      count = 0;

  if ( numberString[length-4] != "0" && numberString[length-4] != undefined ) {
    onesNumber(numberString[length-4]);
    count += 8; // "thousand"
  }

  if ( numberString[length-3] != "0" && numberString[length-3] != undefined ) {
    onesNumber(numberString[length-3]);
    count += 7; // "hundred"
  }

  if (count != 0 && (numberString[length-2] != "0" || numberString[length-1] != "0"))
    count += 3; // "and"

  if (numberString[length-2] === "1") {
    teensNumber(numberString[length-1]);
  } else {
    onesNumber(numberString[length-1]);
    tensNumber(numberString[length-2]);
  }


  function onesNumber(n) {
    switch (n) {
      case "1":                    // "one"
      case "2":                    // "two"
      case "6": count += 3; break; // "six"
      case "4":                    // "four"
      case "5":                    // "five"
      case "9": count += 4; break; // "nine"
      case "3":                    // "three"
      case "7":                    // "seven"
      case "8": count += 5; break; // "eight"
    }
  }

  function teensNumber(n) {
    switch (n) {
      case "0": count += 3; break; // "ten"
      case "1":                    // "eleven"
      case "2": count += 6; break; // "twelve"
      case "5":                    // "fifteen"
      case "6": count += 7; break; // "sixteen"
      case "3":                    // "thirteen"
      case "4":                    // "fourteen"
      case "8":                    // "eighteen"
      case "9": count += 8; break; // "nineteen"
      case "7": count += 9; break; // "seventeen"
    }
  }

  function tensNumber(n) {     
    switch (n) {
      case "4":                    // "forty"
      case "5":                    // "fifty"
      case "6": count += 5; break; // "sixty"
      case "2":                    // "twenty"
      case "3":                    // "thirty"
      case "8":                    // "eighty"
      case "9": count += 6; break; // "ninety"
      case "7": count += 7; break; // "seventy"
    }
  }

  return count;
}