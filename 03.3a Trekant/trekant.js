/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående
let height = Number(prompt("Hvor høj skal trekanten være?"));
//Tegnet lineNo konsollen
console.log("O");
console.log("OO");
console.log("OO");
console.log("OO");
//Tegnet lineNo HTML dokumentet
document.getElementById("pyramide").innerHTML += "O" + "<BR>";
document.getElementById("pyramide").innerHTML += "OO" + "<BR>";
document.getElementById("pyramide").innerHTML += "OOO" + "<BR>";
document.getElementById("pyramide").innerHTML += "OOOO" + "<BR>";

// Hint:
//Antallet af O'er svarer til linjenummeret
