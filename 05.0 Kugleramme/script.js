//Applikationens tilstand
let sum =0;

//Funktioner der ændrer applikationens tilstand
function addToSum(){
    let inputBox = document.getElementById("numberInput");
    //Opdater summen
    let input = Number(inputBox.value);
    sum += input;

    //Vis resultatet på skærmen
    let sumSpan = document.getElementById("sumSpan");
    sumSpan.innerHTML = sum;
}

function resetSum(){
    //Opdater summen
    sum = 0;
    //Vis resultatet på skærmen
    let sumSpan = document.getElementById("sumSpan");
    sumSpan.innerHTML = sum;
}
