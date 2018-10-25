/**
 * Created by Christian on 14-02-2018.
 */
let tal1 = Number(prompt("Indtast et tal"));
let tal2 = Number(prompt("Indtast et tal"));
let tal3 = Number(prompt("Indtast et tal"));


let max = tal1;
if (tal2 > max){
    max = tal2;
}
if (tal3 > max){
    max = tal3;
}

// TODO vis det største tal:
document.write("Det største tal er: " + max );
// NB: Bemærk at vi denne gang skriver til Hjemmesiden