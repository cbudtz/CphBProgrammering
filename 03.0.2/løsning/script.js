/**
 * Created by Christian on 14-02-2018.
 */
let solskin = prompt("Skinner solen?");
if (solskin.toLowerCase() === "ja" || solskin.toLowerCase() ==="j"){
    solskin = true;
} else {
    solskin = false;
}
let regn = prompt("regner det?");
if (regn.toLowerCase() === "ja" || regn.toLowerCase() ==="j"){
    regn = true;
} else {
    regn = false;
}

let tidspunkt = Number(prompt("Hvad er klokken (i hele timer)"));

if ((solskin && (tidspunkt>=12 && tidspunkt <=15)) || regn) {
//TODO: Lav logikken! Enten...
    document.write("Du har brug for din paraply!");
}else {
//Eller...
    document.write("Du har ikke brug for din paraply!");

}