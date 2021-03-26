[[function wordSubsets(A: string[], B: string[]): string[] {
    let count = 0
    let ans = []
    for(const word of A){
        for (let i = 0; i < B.length; i++) {
            if(word.includes(B[i])){
                count ++
            }
            
        }
        if(count == B.length - 1){
            ans.push(word)
        }
        count = 0
    }
}[]]]
