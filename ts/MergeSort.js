var merge = function (arr1, arr2) {
    var results = [];
    while (arr1.length && arr2.length) {
        arr1[0] < arr2[0] ? results.push(arr1.shift()) : results.push(arr2.shift());
    }
    return results;
};
var mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr;
    }
    var center = Math.floor(arr.length / 2);
    var left = arr.slice(0, center);
    var right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([5, 1, 3, 2, 4]));
