function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let arr = s.split('');
  for (let i = 0; i < t.length; i++) {
    let index = arr.indexOf(t[i]);
    if (index >= 0) {
      arr.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
}
