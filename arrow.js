const doubleVal = num => num * 2; //without parameter
const add = (x, y) => x+y; //multiparameter
const give = () => 15; //default

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const mathResult = doMath(6,5);
const result = doubleVal(100);
const addition = add(5,6);
const result2 = give();
console.log(mathResult);