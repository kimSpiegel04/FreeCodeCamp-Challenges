// Flatten a nested array. You must account for varying levels of nesting.
// CANNOT USE flat() OR flatMap()
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr) {
    function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
    };

    return flatDeep(arr, Infinity);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));