// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
//
//     How to take the determinant of a matrix -- it is simplest to start with the smallest cases:
//
//     A 1x1 matrix |a| has determinant a.
//
//     A 2x2 matrix [ [a, b], [c, d] ] or
//
// |a  b|
// |c  d|
// has determinant: a*d - b*c.
//
//     The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.
//
//     For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
//
// |a b c|
// |d e f|
// |g h i|
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:
//
// |- - -|
// |- e f|
// |- h i|
// Note the alternation of signs.
//
//     The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:
//
// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

function determinant(m) {
    // return the determinant of the matrix passed in
    let whole = m.length
    let one = m[0].length
    let arr = []
    let result = 0

    if(whole === 1) return m[0][0]
    if(whole === 2){
        return ((m[0][0]*m[1][1]) - (m[0][1]*m[1][0]))
    }

    for (let l = 0 ; l < one; l ++){
        if(l%2 !== 0){
            m[0][l] = m[0][l] * -1
        }
    }

    for (let i = 0 ; i < whole; i++) {
        for (let j = 1; j < whole; j++) {
            for(let k = 0 ; k < one;k++){
                if(k !== i){
                    arr.push(m[j][k])
                }
            }
        }
        result += m[0][i] * times(arr)
        arr = []
    }
    return result

};

function times(arr) {
    return ((arr[0]*arr[3]) - (arr[1] * arr[2]))
}


m1 = [ [1, 3], [2,5]]
m2 = [ [2,5,3], [1,-2,-1], [1, 3, 4]]

console.log(determinant([[1]]))
console.log(determinant(m1))
console.log(determinant(m2))