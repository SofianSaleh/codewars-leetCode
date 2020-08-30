// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the
// current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity
// into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    for (let i = 0; i < arr2.length; i++) {
        let exists = false
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                exists = true
                arr1[j][0] += arr2[i][0]
                break;
            }
        }
        if (!exists) {
            arr1.push(arr2[i])
        }
    }
    // sort the array alphebatically

    arr1.sort((item1, item2) => item1[1] < item2[1] ? -1 : 1)
    console.log(arr1)
    return arr1
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
]

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]

updateInventory(curInv, newInv);
