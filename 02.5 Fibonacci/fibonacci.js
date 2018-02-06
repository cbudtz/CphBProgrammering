/**
 * Created by Christian on 06-02-2018.
 */
console.log("de 10 første fibonaccital er ");

fibPrev = 0;
fib = 1;

//TODO Make a loop!
console.log("Fibonacci #1: " + fib);

nextFib = fibPrev + fib; // 0 + 1
fibPrev = fib; // 1
fib = nextFib; // 1

console.log("Fibonacci #2: " + fib);

nextFib = fibPrev + fib; // 1 + 1
fibPrev = fib;
fib = nextFib;

console.log("Fibonacci #3: " + fib);




