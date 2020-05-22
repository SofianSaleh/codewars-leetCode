const firstNonRepeatingLetter = s => {
    // Add your code here
    console.log(s)

    for(let i = 0 ; i < s.length; i++){
        let count = 0
        for(let j = 0 ; j < s.length; j++){
            if(s[i] === s[j]){
                count++
            }else if(s[i].toUpperCase() === s[j]||s[i] === s[j].toUpperCase()){
                count++
            }
        }
        if(count === 1) return s[i]
    }
    return ''
};