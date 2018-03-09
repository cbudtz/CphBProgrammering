
let badeVand =  [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];

let numberOfOnes = 0;


//TODO count number of ones:

for (let i = 0; i<badeVand.length;i++){
    if (badeVand[i]===1){numberOfOnes++;}
}


//Output the result to a div
document.getElementById("output").innerHTML = "Antal 1'ere: " + numberOfOnes;


