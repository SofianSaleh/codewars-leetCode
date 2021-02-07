function shortestToChar(s: string, c: string): number[] {
  var results: number[] = [];

  let str: string[] = s.split('');

  str.forEach((element: string, index: number) => {
    // if the element is e
    if (element === c) results[index] = 0;
    else {
      if (str.lastIndexOf(c, index) === -1) {
        // if its on the right
        results[index] = str.indexOf(c, index);
      }
    }
  });

  return results;
}
