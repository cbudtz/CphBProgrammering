/**
 * Created by Christian on 25-01-2018.
 */

let a = Number(prompt("a"));
let b = Number(prompt("b"));
let c = Number(prompt("c"));



let d = b*b-4*a*c;

if (d>0) {

    let x1 = (-b + Math.sqrt(d)) / 2 * a;
    let x2 = (-b - Math.sqrt(d)) / 2 * a;
    alert("Der er to rødder: x1:" + x1 + ", x2:" +x2);
} else if (d === 0){
    let x = -b/2*a;
    alert("Der er én rod: " + x);
} else {
    alert("Der er ingen rødder!");
}

