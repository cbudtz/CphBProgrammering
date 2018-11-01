/**
 * Created by Christian on 06-02-2018.
 */
let kodeord = prompt("Indtast dit kodeord");

//TODO kontroller kodeordets længde!

if (kodeord.length< 5){
    alert("Dit kodeord er for kort");
} else if (kodeord.length >8){
    alert("Dit kodeord er for langt");
} else {
    alert("Dit kodeord er OK");
}
