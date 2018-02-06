let indkomst = Number(prompt('Indtast din indkomst:'));

let ambi, pension, bundskat, samletSkat;


ambi = (indkomst *8.0) /100;
pension = (indkomst * 2.0)/100;
bundskat = (indkomst * 7.0)/100;
//Skriver til konsollen istedet for at lave en popup - Tryk F12 i Chrome for at se konsollen og udvikler værktøjer
console.log("Arbejdsmarkedsbidrag: " + ambi);
console.log("Særlig pensionsopsapring: " + pension);
console.log("Bundskat: " + bundskat);

samletSkat = (8.0 + 2.0 + 7.0) /100 * indkomst;
//Eller mere oplagt : samletSkat = ambi + pension + bundskat;
console.log("Samlet skat: " + samletSkat);