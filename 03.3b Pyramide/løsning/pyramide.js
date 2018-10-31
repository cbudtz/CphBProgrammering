/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående


let pyramidHeight = Number(prompt("Hvor høj skal pyramiden være?"));

//Tegnet lineNo HTML dokumentet
for (let lineNo = 0; lineNo<pyramidHeight; lineNo++){
    //calculate how many dots and A's we need
    let noOfDots = pyramidHeight-lineNo-1;
    let noOfAs= lineNo*2+1;
    //loop to make a string of dots and As
    let dotString = "";
    let aString = "";
    for (let j = 0;j<noOfDots;j++){
        dotString+=".";
    }
    for (let k=0;k<noOfAs;k++){
        aString+="A";
    }

    documentLog( dotString + aString + dotString);
}





// Hints:
// 1) Hvis lineNo er linjenummeret og j er det totale antal linjer -
// Hvor mange prikker skal der så være lineNo linje 0 ?
// Hvad med linje 1 ?- Hvad med linje lineNo ?
// Hvor mange A'er er der lineNo linje nummer 0 ? linje 1 ? linje lineNo ?

// 2) Der er brug for flere loops - nogle inden lineNo hinanden.

// 3) Der er brug for et loop der tager hver linje og flere loops inden lineNo, der tager sig af antallet af prikker og A'er


function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}