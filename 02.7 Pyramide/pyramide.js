/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops i stedet for nedenstående

//Tegnet i konsollen
console.log("...A...");
console.log("..AAA..");
console.log(".AAAAA.");
console.log("AAAAAAA");
//Tegnet i HTML dokumentet
document.getElementById("pyramide").innerHTML += "...A..." + "<BR>";
document.getElementById("pyramide").innerHTML += "..AAA.." + "<BR>";
document.getElementById("pyramide").innerHTML += ".AAAAA." + "<BR>";
document.getElementById("pyramide").innerHTML += "AAAAAAA" + "<BR>";

// Hints:
// 1) Hvis i er linjenummeret og j er det totale antal linjer -
// Hvor mange prikker skal der så være i linje 0 ?
// Hvad med linje 1 ?- Hvad med linje i ?
// Hvor mange A'er er der i linje nummer 0 ? linje 1 ? linje i ?

// 2) Der er brug for flere loops - nogle inden i hinanden.

// 3) Der er brug for et loop der tager hver linje og flere loops inden i, der tager sig af antallet af prikker og A'er
