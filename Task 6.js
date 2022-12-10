// Task 6

const unevenNumArr = [23, 67, 'Thanks', true, 925];
const evenNumArr = [23, 23, 23, 23, 23];

const result1 = unevenNumArr.every((item, id, arr) => item === arr[0]);
const result2 = evenNumArr.every((item, id, arr) => item === arr[0]);
console.log(result1);
console.log(result2);