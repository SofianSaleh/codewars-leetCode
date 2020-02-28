/**
*  Carol's boss Bob thinks he is very smart. He says he made an app which renders messages unreadable without changing any letters, only by adding some new ones, while preserving message integrity (i. e. the original message can still be retrieved).
*
*He gave some limited access to his app to Carol to challenge her, and hinted that if Carol cannot crack this simple task, she might be fired.
*
*Carol was trying to crack this code herself, but got too tired, so she came to you for help. However, she succeeded to hack Bob's app and found a data field called 'marker'. She thinks it can be helpful for cracking Bob's app.
*
*Help Carol keep her job!
*
*Function features
*Arguments
*encoded - the encoded string which we are trying to revert to its original form.
*marker - a short string used in the encoding process somehow.
*
 * decoder("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", '-'), returns "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
 * */

// need to make it more efficcent

function decoder(encoded, marker) {
    let text = encoded.split(marker)
    console.log(text)
    let arrReversed = []
    let nonReversed = []

    for (let i = 1; i < text.length ; i+=2){

        let reversed = text[i].split('').reverse().join('')
        console.log(reversed)
        arrReversed.push(reversed)
        nonReversed.push(text[i-1])
    }
    if(text.length % 2 !== 0){
        nonReversed.push(text[text.length - 1])
    }
    arrReversed = arrReversed.reverse()
    return nonReversed.join('') + arrReversed.join('')
}
console.log(decoder("qqqqAqq.qqliuaqqsutcqqm nulla dolor, varius eget aliuam sed, venenatis eu le",'qq'))
