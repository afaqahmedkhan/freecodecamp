function convertToRoman(num) {
  let romanNumeral = [];
  var numberRangeList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let range = 1000;
  while (num > 0) {
    for (let i = 0; i < numberRangeList.length; i++) {
      if (num < numberRangeList[i]) {
        range = numberRangeList[i - 1];
        break;
      }
    }
    switch (range) {
      case 1:
        romanNumeral.push("I");
        break;
      case 4:
        romanNumeral.push("IV");
        break;
      case 5:
        romanNumeral.push("V");
        break;
      case 9:
        romanNumeral.push("IX");
        break;
      case 10:
        romanNumeral.push("X");
        break;
      case 40:
        romanNumeral.push("XL");
        break;
      case 50:
        romanNumeral.push("L");
        break;
      case 90:
        romanNumeral.push("XC");
        break;
      case 100:
        romanNumeral.push("C");
        break;
      case 400:
        romanNumeral.push("CD");
        break;
      case 500:
        romanNumeral.push("D");
        break;
      case 900:
        romanNumeral.push("CM");
        break;
      case 1000:
        romanNumeral.push("M");
        break;
      default:
        num = -1;
    }

    num = num - range;
  }
  return romanNumeral.join("");
}
console.log(convertToRoman(900));
