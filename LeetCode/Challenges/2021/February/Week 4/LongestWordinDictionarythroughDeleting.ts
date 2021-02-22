function findLongestWord(s: string, d: string[]): string {
  let ans = '';

  for (const word of d) {
    let i = 0;

    for (const c in s) {
      if (i < word.length && c === word[i]) {
          i += 1
      }
    }
    if(i === word.length){
        if(word.length > ans.length || word.length ans.length && word < ans){
            ans = word
        }
    }
  }
}
