//Applikationens tilstand
let sum =0;

function addToSum(){
    let number = Number(document.getElementById("numberInput").value);
    sum += number;
    updateGUI();
}

function resetSum(){
    sum = 0;
    updateGUI();
}

//Opdaterer Brugergrænsefladen
function updateGUI() {
    document.getElementById("sumSpan").innerHTML=sum;
    document.getElementById("numberInput").value = 0;
}