// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM
// WWWe worwk for a company building a smart home thermometer. Our most recent task is this: 'Given an array of temperature of one day, calcuulate the temperature amplitude. Keep in mind that sometimes there might be a sensor error'

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
// - What is temp amplitude? Answer: difference between the highest and lowest temperature.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

//2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in the temp array
// - Find min value in the temp array
// - Subtract min from max (amplitude) and return it.


const temperatureAmp = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {

        if (temps[i] > max) max = temps[i];
        if (temps[i] < max) min = temps[i];
    }
    console.log(max, min);
}

