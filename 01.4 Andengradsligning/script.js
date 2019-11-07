let a = Number(prompt("Indtast a"));
let b = Number(prompt("Indtast b"));
let c = Number(prompt("Indtast c"));

let d = (b*b) - (4*a*c);

let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);

alert("X1 : " + x1);
alert("X2 : " + x2);