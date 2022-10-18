var arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
var arr2 = [...(new Set(arr))]  // [1, 2, 3, 4, 5]

console.log(arr2);