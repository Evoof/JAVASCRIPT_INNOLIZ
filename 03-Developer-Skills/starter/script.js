// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM
// WWWe worwk for a company building a smart home thermometer. Our most recent task is this: 'Given an array of temperature of one day, calcuulate the temperature amplitude. Keep in mind that sometimes there might be a sensor error'



//1. Understanding the problem
// - What is temp amplitude? Answer: difference between the highest and lowest temperature.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

//2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in the temp array
// - Find min value in the temp array
// - Subtract min from max (amplitude) and return it.


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatureAmp = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const presentTemp = temps[i];
        if (typeof presentTemp !== 'number') continue;

        if (presentTemp > max) max = presentTemp;
        if (presentTemp < min) min = presentTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude =temperatureAmp(temperatures);
console.log(amplitude);


const temperatureAmp2 = function (a, b) {
    const temps = a.concat(b);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const presentTemp = temps[i];
        if (typeof presentTemp !== 'number') continue;

        if (presentTemp > max) max = presentTemp;
        if (presentTemp < min) min = presentTemp;
    }
    console.log(max, min);
    return max - min;
}
const newAmplitude = temperatureAmp2([3, 4, 1], [9, 6, 0]);
console.log(newAmplitude);
