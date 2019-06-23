const merge = (sortedArr1, sortedArr2) => {
    const results = [];

    while(sortedArr1.length && sortedArr2.length) {
        if (sortedArr1[0] < sortedArr2[0]) {
            results.push(sortedArr1.shift());
        } else {
            results.push(sortedArr2.shift());
        }

    }
    return [...results, ...sortedArr1, ...sortedArr2];
};


const mergeSort = (arr) => {
    if(arr.length === 1){
        return arr;
    }

    const half = Math.floor(arr.length / 2);
    const left = arr.slice(0,half);
    const right = arr.slice(half);

    return merge(mergeSort(left), mergeSort(right))
};

