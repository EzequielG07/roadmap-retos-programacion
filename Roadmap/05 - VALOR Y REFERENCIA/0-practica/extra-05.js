let valueA = 10;
let valueB = 20;

const changeValue = (firstValue, secondValue) => {
    let temp = firstValue;
    firstValue = secondValue;
    secondValue = temp;
    return [firstValue, secondValue];
};

let arrValues = changeValue(valueA, valueB),
    firstValueChanged = arrValues[0],
    secondValueChanged = arrValues[1];

console.log(arrValues);
console.log(firstValueChanged);
console.log(secondValueChanged);

let arrA = [10, 20];
let arrB = [30, 40];

const changeArrs = (firstArr, secondArr) => {
    let temp = firstArr;
    firstArr = secondArr;
    secondArr = temp;
    return [firstArr, secondArr];
};

let arrC = changeArrs(arrA, arrB)[0];
let arrD = changeArrs(arrA, arrB)[1];

console.log(arrC);
console.log(arrD);
