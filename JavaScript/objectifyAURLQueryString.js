// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.
//
//     You will receive a string input that looks something like this:
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:
//
// {
//     'user': {
//     'name': {
//         'firstname': 'Bob',
//             'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
// }
// }
// You can expect valid input. You won't see input like:
// // This will NOT happen
// foo=1&foo.bar=2
// All properties and values will be strings — and the values should be left as strings to pass the tests.
//     Make sure you decode the URI components correctly
// A method has been provided for testing Objects to compare objects recursively without depending on property order:
//     assertSimilarObjects(myValue, expectedValue);
// Use it just like Test.assertSimilar, it will call the testing framework for you.

// out = {
//     'user': {
//         'name': {
//             'firstname': 'Bob',
//             'lastname': 'Smith'
//         },
//         'favoritecolor': 'Light Blue'
//     }
// };

function convertQueryToMap(query) {
    // add your code here
    let splittedQuery = query.split('&')
    let out = {
        "user":{
            "name":{

            },

        }
    }

    for (let i = 0 ; i < splittedQuery.length; i++) {
        if(splittedQuery[i]){

        var temp = splittedQuery[i].split('=')
            var keys = temp[0].split('.')
        }
        if(keys[1] === 'name'){
        out[keys[0]][keys[1]][keys[2]] = temp[temp.length -1]
        console.log( out[keys[0]][keys[1]][keys[2]])
        }else {
            let x = temp[temp.length -1].split('%20')
            out[keys[0]][keys[1]] = x.join(' ')
        }
    }
    return out
}
var q = 'favoritecolor=Light%20Blue'
console.log(convertQueryToMap((q)))