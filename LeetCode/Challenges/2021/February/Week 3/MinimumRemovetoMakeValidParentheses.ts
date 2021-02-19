function minRemoveToMakeValid(s: string): string {
  let sb = '';
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (sb.charAt(i) == '(') {
      stack.push(i); // record unpaired '(' index
    } else if (sb.charAt(i) == ')') {
      if (stack.length === 0) sb.setCharAt(i, '#');
      // mark unpaired ')' as '#'
      else stack.pop(); // find a pair!
    }
}
    while (stack.length != 0)
      sb.setCharAt(stack.pop(), '#');

    return sb.toString().replaceAll("#", "");
  }
}
// class Solution {
//   public String minRemoveToMakeValid(String s) {

//     for (int i = 0; i < s.length(); ++i)

//     // mark unpaired '(' as '#'
// }
