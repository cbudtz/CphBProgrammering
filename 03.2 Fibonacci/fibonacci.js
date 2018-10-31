/**
 * Created by Christian on 06-02-2018.
 */
console.log("de 10 første fibonaccital er ");

fibPrev = 0; //Forrige fibonaccital
fib = 1; // Det nuværende fibonaccital

//TODO Make a loop!
console.log("Fibonacci #1: " + fib);

nextFib = fibPrev + fib; // 0 + 1 // Det næste fibonacci tal er summen af de to foregående
fibPrev = fib; // 1 //Opdater det forrige fibonacci tal
fib = nextFib; // 1 //Opdater det nuværende fibonacci tal

console.log("Fibonacci #2: " + fib);

nextFib = fibPrev + fib; // 1 + 1
fibPrev = fib;
fib = nextFib;

console.log("Fibonacci #3: " + fib);




