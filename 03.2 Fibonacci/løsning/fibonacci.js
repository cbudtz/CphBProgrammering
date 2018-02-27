/**
 * Created by Christian on 06-02-2018.
 */
console.log("de 10 første fibonaccital er ");

fibPrev = 0;
fib = 1;

//TODO Make a loop!
for (let i =0;i<10;i++) {
    console.log("Fibonacci #" + (i + 1) + ": " + fib);

    nextFib = fibPrev + fib; // 0 + 1
    fibPrev = fib; // 1
    fib = nextFib; // 1
}



