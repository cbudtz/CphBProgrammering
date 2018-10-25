/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående
let height = Number(prompt("Hvor høj skal trekanten være?"));
//Tegnet lineNo konsollen

for (let i = 0; i< height; i++)
{
    let line = "";
    for (let j = 0; j <= i ; j++){
        line += "O";
    }
    console.log(line);
    documentLog(line);
}

// Hint:
//Antallet af O'er svarer til linjenummeret


function documentLog(string){
    document.getElementById("pyramide").innerHTML += string + "<BR>";
}