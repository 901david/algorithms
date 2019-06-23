const merge: (arr1:[], arr2:[]) => [] = (arr1, arr2) => {
    const results: [] = [];

    while(arr1.length && arr2.length){
        arr1[0] < arr2[0] ? results.push(arr1.shift()) : results.push(arr2.shift());
    }

    return results;
};


const mergeSort: (arr: []) => [] = arr => {
    if(arr.length === 1) {
        return arr;
    }

    const center: number = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort([5,1,3,2,4]));
