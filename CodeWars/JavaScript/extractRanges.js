// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
//     Example:
//
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"


function solution(list){
    // TODO: complete solution
    let tupil = []
    let arr = []
    let str = ''

    for(let i = 0; i < list.length; i++) {
        if(list[i] && list[i] !== (list[i+1]-1) && list[i-1] === (list[i]-1)){
            tupil.push(list[i])
        }
        if(list[i] !== (list[i+1]-1)){
            if(tupil.length === 0){
                tupil.push(list[i])
            }
            arr.push(tupil)
            tupil = []
        }
        else if(list[i] === (list[i+1]-1)){
            if(tupil.length === 0){
                tupil.push(list[i])
            }
        }
    }

    for (let j = 0 ; j < arr.length; j++) {
        if(arr[j].length === 1 ){
            str += arr[j][0] + ','

        }else if(arr[j].length === 2 && (arr[j][0] - arr[j][1] === -1)){
            str += arr[j][0] + ',' + arr[j][1]+','
        }else {
            str +=   arr[j][0] + '-' + arr[j][1] + ','

        }
    }

    return str.slice(0,str.length - 1)
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// console.log( solution([ -90,
//     -88,
//     -87,
//     -84,
//     -82,
//     -80,
//     -79,
//     -77,
//     -75,
//     -72,
//     -71,
//     -68,
//     -65,
//     -62,
//     -60,
//     -59,
//     -57,
//     -56 ]))