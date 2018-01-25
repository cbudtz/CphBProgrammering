//TODO: Udvid programmet så det også beregner bundskatten på 7.0%

let indkomst = Number(prompt('Indtast din indkomst:'));

let ambi, pension, bundskat, samletskat;


ambi = (indkomst *8.0) /100;
pension = (indkomst * 2.0)/100;
//Skriver til konsollen istedet for at lave en popup - Tryk F12 i Chrome for at se konsollen og udvikler værktøjer
console.log("Arbejdsmarkedsbidrag: " + ambi);
console.log("Særlig pensionsopsapring: " + pension);

samletSkat = 8.0 + 2.0 /100 * indkomst;
console.log("Samlet skat: " + samletSkat); //TODO: Hvorfor regner den forkert - fiks fejlen!

let object = {}
let object = new Object();
let person = new Person();

let arr = [];
test

let person = new Person();

function Person(){
    this.test = 'hat';
}