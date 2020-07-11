/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
    //find prime numbers up to num
    let primes=[0];
    for(var i=2; i<=num; i++){
        var notPrime=false;
        for(var j=2; j<i; j++) {
            if(i%j==0 && j!==i) {
                notPrime=true;
            }
        } if (notPrime==false){
            primes.push(i);
        }
    }

    //sum of primes
    var primeFactors=[];
    for(var i=0; i<primes.length; i++){
        if(primes[i]<=num){
            primeFactors.push(primes[i]);
        }
    }
    return primeFactors.reduce((sum,num)=>sum+num);
}

console.log(sumPrimes(977));