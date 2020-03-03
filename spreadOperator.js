const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];
const arr3 = [11,12,13,14,15];

const allArr = [...arr1, ...arr2, 10, ...arr3];
// console.log(allArr);

const val1 = 550;
const val2 = 250;
const val3 = 450;
const max = Math.max(val1,val2,val3);
// console.log(max);
const value = [440, 230, 540];
const maximum = Math.max(...value);
console.log(maximum);
