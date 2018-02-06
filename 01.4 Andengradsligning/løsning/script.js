/**
 * Created by Christian on 25-01-2018.
 */

let a = prompt("a");
let b = prompt("b");
let c = prompt("c");

d = b*b-4*a*c;

x1 = (-b + Math.sqrt(d))/2*a;
x2 = (-b - Math.sqrt(d))/2*a;

alert("x1:" + x1);
alert("x2:" + x2);