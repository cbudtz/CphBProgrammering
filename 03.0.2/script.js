/**
 * Created by Christian on 14-02-2018.
 */
let solskin = prompt("Skinner solen?");
if (solskin.toLowerCase() === "ja" || solskin.toLowerCase() ==="j"){
    solskin = true;
} else {
    solskin = false;
}

let tidspunkt = Number(prompt("Hvad er klokken (i hele timer)"));

//TODO: Lav logikken! Enten...
document.write("Du har brug for din paraply!");

//Eller...
document.write("Du har ikke brug for din paraply!");