/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return 0.01;
}

// getTime --> return the number of millisecond since 1 JAN 1970 
const time1 = new Date();
const anw1 = time1.getTime();
calculateTime(10);  

const time2 = new Date();
const anw2 = time2.getTime();

console.log(anw2-anw1);