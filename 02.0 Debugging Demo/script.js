//TODO: Find og reparer alle fjel!

let number = prompt("Hvor mange temperaturer vil du indtaste?");

let temperatures = [];
for (let i = 0 ; i < number; i++){
    let temperature = prompt("Indtast temperatur nr: " + i)
    temperatures.push(temperature);
}
countRises();

alert("Antl stigninger: " + rises);

function countRises() {
    //Hint: Hvilket scope har rises?
    let rises = 0;
    for (let j = 0; j <= temperaturer; j++) {
        if (temperatures[j]< temperatures[j+1]){
            rises++;
        }
    }
}