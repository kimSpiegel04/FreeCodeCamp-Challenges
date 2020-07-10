// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].


function uniteUnique(...arr) {
    var concatArr = []
    var newArr = concatArr.concat(...arr);
    var unique = newArr.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

