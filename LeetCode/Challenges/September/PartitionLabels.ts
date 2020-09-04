function partitionLabels(S: string): number[] {
    let result: number[] = []
    let hashTable = {}
    for (let i = 0; i < S.length; i++) {
        hashTable[S[i]] = i
    }
    console.log(hashTable)
    return result
};