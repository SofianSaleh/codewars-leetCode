function shortestToChar(s: string, c: string): number[] {
  var results: number[] = [];

  let str: string[] = s.split('');

  str.forEach((element: string, index: number) => {
    // if the element is e
    if (element === c) results[index] = 0;
    else {
      if (str.lastIndexOf(c, index) === -1) {
        // if its on the right
        results[index] = str.indexOf(c, index) - index;
      } else if (str.indexOf(c, index) === -1) {
        //   if its not on the right
        results[index] = index - str.lastIndexOf(c, index);
      } else {
        if (
          str.indexOf(c, index) - index >=
          index - str.lastIndexOf(c, index)
        ) {
          //   charecter from the left of the relatively recent
          results[index] = index - str.lastIndexOf(c, index);
        } else {
          //   char from the right side
//           results[index] = str.indexOf(c, index) - index;
//         }
//       }
//     }
//   });
  return results;
}
