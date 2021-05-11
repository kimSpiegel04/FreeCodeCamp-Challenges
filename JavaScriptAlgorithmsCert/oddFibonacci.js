/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
*/

function sumFibs(num) {
    //find fibonacci numbers up to 'num'
    let nums=[0,1];
    for(var i=2; i<num+1; i++){
        nums.push(nums[i-2]+nums[i-1])
    }

    //keep under num
    var underNum=nums.filter(number => number<=num);

    //find odd numbers
    var oddNums=underNum.filter(number => number%2!==0);

    //return sum of even numbers
    var oddSum=oddNums.reduce((sum, number) => sum + number);

    return oddSum;
}

console.log(sumFibs(75024));
