/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

Our initial numbers are , , , , and . We can calculate the following sums using four of the five integers:

If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
If we sum everything except , our sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.
*/

//Solution 1
function miniMaxSum(arr) {
  const asc = [...arr].sort((a, b) => b - a);
  const desc = [...arr].sort((a, b) => a - b);
  const highestSum = asc.slice(0, 4).reduce((sum, num) => (num += sum), 0);
  const lowestSum = desc.slice(0, 4).reduce((sum, num) => (num += sum), 0);
  console.log(`${lowestSum} ${highestSum}`);
}

//Solution 2
const miniMaxSum = arr => {
  const asc = [...arr].sort((a, b) => b - a);
  const desc = [...arr].sort((a, b) => a - b);
  const reduceMethod = (sum, num) => (num += sum);
  console.log(
    `${desc.slice(0, 4).reduce(reduceMethod, 0)} ${asc
      .slice(0, 4)
      .reduce(reduceMethod, 0)}`
  );
};

//Solution 3

const mergeDsc = (left, right) => {
  const results = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

const mergeAsc = (left, right) => {
  const results = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] > right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

const mergeSort = (arr, mergeFn) => {
  if (arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return mergeFn(mergeSort(left, mergeFn), mergeSort(right, mergeFn));
};

const miniMaxSum = arr => {
  const asc = mergeSort(arr, mergeAsc);
  const desc = mergeSort(arr, mergeDsc);
  const reduceMethod = (sum, num) => (num += sum);
  console.log(
    `${desc.slice(0, 4).reduce(reduceMethod, 0)} ${asc
      .slice(0, 4)
      .reduce(reduceMethod, 0)}`
  );
};
