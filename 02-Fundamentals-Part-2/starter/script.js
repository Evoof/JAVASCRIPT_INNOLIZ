'Use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is jonas');
// }

// Calling / rinning / invoking the function
// logger();
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 10);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 10));

// function makeSoup(vegetable, pepper, salt) {
//     const soup = vegetable * pepper + salt;
//     return soup;
// }
// const  delicious = makeSoup(5, 10, '6');
// console.log(delicious);
// console.log(makeSoup(20, 10, 'rice'));
// console.log(makeSoup(20, 10, 5));

// const num = Number('23');

// FUNTION DECLARATION VS EXPRESSION

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// FUNCTION EXPRESSION

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTION

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, ) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));