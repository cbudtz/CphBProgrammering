/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående
let pyramidHeight = Number(prompt("Hvor høj skal pyramiden være?"));

//Tegner en pyramide der er 4 høj i konsollen
console.log("...A...");
console.log("..AAA..");
console.log(".AAAAA.");
console.log("AAAAAAA");
//Tegner en pyramide der er 4 høj på hjemmesiden (Bonus feature)
documentLog("...A...");
documentLog("..AAA..");
documentLog(".AAAAA.");
documentLog("AAAAAAA");

// Hints:
// 1) Hvis lineNo er linjenummeret og j er det totale antal linjer -
// Hvor mange prikker skal der så være lineNo linje 0 ?
// Hvad med linje 1 ?- Hvad med linje lineNo ?
// Hvor mange A'er er der lineNo linje nummer 0 ? linje 1 ? linje lineNo ?

// 2) Der er brug for flere loops - nogle inden lineNo hinanden.

// 3) Der er brug for et loop der tager hver linje og flere loops inden lineNo, der tager sig af antallet af prikker og A'er

//Christians hjemmebryggede log-funktion til hjemmsiden
function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}