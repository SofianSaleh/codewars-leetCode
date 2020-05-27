/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let arrOfStr = [];

  function recurse(allString, slicedString = "", i = 0, j = 0) {
    // console.log(i, j);
    if (i === allString.length - 1) {
      let x = "";
      for (let i = 0; i < arrOfStr.length; i++) {
        if (
          arrOfStr[i] === arrOfStr[i].split("").reverse().join("") &&
          arrOfStr[i].length > x
        )
          x = arrOfStr[i];
      }
      return x;
    } else if (slicedString[0] === allString[j] || j === allString.length - 1) {
      slicedString += allString[j];
      //   if (slicedString === slicedString.split("").reverse().join("")) {
      arrOfStr.push(slicedString);
      //   }
      allString;
      i++;
      j = i;
      return recurse(allString, (slicedString = ""), i, j);
    } else {
      slicedString += allString[j];
      j++;
      return recurse(allString, slicedString, i, j);
    }
  }
  return recurse(s);
};

console.log(longestPalindrome("babad"));
