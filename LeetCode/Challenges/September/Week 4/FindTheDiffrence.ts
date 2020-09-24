function findTheDifference(s: string, t: string): string {
  let arr = t.split('');
  for (let i = 0; i < t.length; i++) {
    let index = arr.indexOf(s[i]);
    arr.splice(index, 1);
  }
  return arr.join('');
}
