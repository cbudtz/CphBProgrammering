//TODO omskriv passwordcheckeren fra uge 2 så den skriver til DOM'en i stedet for en alert
/**
 * Created by Christian on 06-02-2018.
 */
let kodeord = prompt("Indtast dit kodeord");

let outputDiv = document.getElementById("output");
//TODO kontroller kodeordets længde!

if (kodeord.length< 5){
    outputDiv.innerHTML = "Dit kodeord er for kort";
} else if (kodeord.length >8){
    outputDiv.innerHTML = "Dit kodeord er for langt";
} else {
    outputDiv.innerHTML = "Dit kodeord er OK";
}
