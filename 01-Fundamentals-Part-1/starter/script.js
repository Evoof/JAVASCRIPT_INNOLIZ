// let js = 'amazing';
// console.log(40 + 8 +23 - 10);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.142;

// let myFirstJob = 'coder';
// let myCurrentJob = 'Teacher'

// let job1 = 'programmer';
// let jo2 = 'teacher';

// console.log(myFirstJob);

// let country = 'Nigeria';
// let continent = 'Africa';
// let population = 20000000000;

// console.log(country)
// console.log(continent)
// console.log(population)

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthYear = 1991;

// var job = 'programmer';
// job = 'teacher';

// Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);
// // 2 ** 3 means 2 to te power of 3 = 2 * 2 * 2 

// const firstName = 'jonas';
// const lastName = 'duke';
// console.log(firstName + ' ' + lastName);

// // assignment operators (=)

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x ++; // x = x + 1
// x --; 
// console.log(x);

// //Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <==
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:

// 1. Store Mark's and John's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// GOOD LUCK 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String with
// multiple
// lines`);

// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
// }

// const birthYear = 1998;


// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }


// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear,));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('i am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1; // 11
// n = n - 1; // 11 - 1
// console.log(n); // 10

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job!');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
} 