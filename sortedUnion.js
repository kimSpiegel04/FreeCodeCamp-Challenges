function uniteUnique(...arr) {
    var concatArr = []
    var newArr = concatArr.concat(...arr);
    var unique = newArr.filter((v, i, a) => a.indexOf(v) === i);
    return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));