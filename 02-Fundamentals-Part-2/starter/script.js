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

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return`${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function(birthYear) {
//     return 2037 -birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
    
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991,'Jonas'));
// console.log(yearsUntilRetirement(1970,'Mike'));

// ARRAYS

// const friend1 = 'Emmanuel';
// const friend2 = 'Fikayo';
// const friend3 = 'Ogechi';

// const friends = ['Emmanuel', 'Fikayo', 'Ogechi'];
// console.log(friends);

// const y = new Array(1999, 1995, 1999, 2022);

// console.log(friends[0]); //to cal out a particular parameter in the array
// console.log(friends[2]);

// console.log(friends.length); //to get the actual number of elements in the array

// console.log(friends[friends.length - 1]);
// friends[2] = 'Victor';
// console.log(friends);


// const firstName = 'Fikayo'
// const fikayo = [firstName, 'Victor', 2024 - 1990, 'Web Developer', friends];
// console.log(fikayo);
// console.log(fikayo.length);

// //Exercise

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
    
// const years = [1990, 1992, 1995, 1996, 1998];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Emmanuel', 'Fikayo', 'Ogechi'];
// friends.push('Eromosele'); //add element to the end of the array
// console.log(friends);

// friends.unshift('Victor'); //add element to the beginning of the array
// console.log(friends);

// friends.pop(); //remove an element at the end of the array
// console.log(friends);

// friends.shift(); //remove first element of the array
// console.log(friends);

// console.log(friends.indexOf('Fikayo'));
// console.log(friends.indexOf('Ogechi'));


// console.log(friends.includes('Emmanuel'))
// console.log(friends.includes('Ryan'))

// if (friends.includes('Emmanuel')) {
//     console.log('You have a friend called Emmanuel');
// }

//OBJECTS

const EmmanuelArray = [
    'Emmanuel',
    'Fikayo',
    2037 - 1990,
    'Software Engineer',
    ['Victor', 'Ogechi', 'Eromosele']
];

const profile = {
    firstName: 'Fikayo',
    lastName: 'Victor',
    age: 2037 - 1990,
    job: 'Softwware Engineer',
    friends: ['Patrick', 'Ugo', 'Obadaye']
};
console.log(profile);

console.log(profile.lastName);
console.log(profile['lastName']);

const nameKey = 'Name';
console.log(profile['first' + nameKey]);
console.log(profile['last' + nameKey]);


const interestedIn = prompt('wWhat do you want to know about Emmanuel? Choose between fistName, lastName, age, job and friends');
console.log(profile[interestedIn]);

if (profile[interestedIn]) {
    console.log(profile[interestedIn]);
} else {
    console.log('Wrong request!! Choose between fistName, lastName, age, job and friends');
}

profile.location = 'Nigeria';
profile['twitter'] = '@confirm_evoo';
console.log(profile);