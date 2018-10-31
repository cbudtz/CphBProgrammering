/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående
let height = Number(prompt("Hvor høj skal trekanten være?"));
//Tegner en pyramide, der er fire høj
console.log("O");
console.log("OO");
console.log("OOO");
console.log("OOOO");

//Tegnet på hjemmesiden i stedet med en funktion (Bonus feature)
documentLog("O");
documentLog("OO");
documentLog("OOO");
documentLog("OOOO");

// Hint:
//Antallet af O'er svarer til linjenummeret

//Christians hjemmebryggede log-funktion til hjemmsiden
function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}