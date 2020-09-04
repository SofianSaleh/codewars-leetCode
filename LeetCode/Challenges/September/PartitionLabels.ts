function partitionLabels(S: string): number[] {
    let result: number[] = []
    let hashTable = {}
    for (let i = 0; i < S.length; i++) {
        hashTable[S[i]] = i
    }
    let i: number = 0
    let start: number = 0
    let j: number = 0
    let n: number = S.length
    while (i < n) {
        j = Math.max(j, hashTable[S[i]])
        if (i === j) {
            result.push(i - start + 1)
            start = i + 1;
        }
        i++
    }

    return result
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))