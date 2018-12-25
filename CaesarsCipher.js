function rot13(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
      let charCode = str[i].charCodeAt(0);
      if (charCode - 13 < 65) {
        charCode = charCode + 13;
      } else {
        charCode = charCode - 13;
      }
      str[i] = String.fromCharCode(charCode);
    }
  }
  return str.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
