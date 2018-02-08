/**
 * Created by Christian on 06-02-2018.
 */

let pyramidSize = Number(prompt("Indtast antal linjer i pyramiden"));

for (let i = 0; i<pyramidSize; i++){
    let numberOfDots = pyramidSize-i-1; //Calculate the number of dots needed for line i
    let dotString = "";
    for (let j = 0; j < numberOfDots; j++) {
        dotString += ".";
    }
    let aString = "A";
    for (let k = 0; k < i; k++){
        aString+="AA";
    }
    console.log(dotString + aString + dotString);
    document.getElementById("pyramide").innerHTML+= (dotString + aString + dotString + "<BR>");

}