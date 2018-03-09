
let badeVand =  [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];

let numberOfOnes = 0;
let maxNumberOfOnesInARow = 0;

//TODO count number of ones IN A ROW:
for (let i = 0; i<badeVand.length; i++){

    if (badeVand[i]===1){
        numberOfOnes++;
    } else {
        if(numberOfOnes> maxNumberOfOnesInARow){
            maxNumberOfOnesInARow=numberOfOnes; //Have we found more than before?
        }
        numberOfOnes=0;
    }
}

if(numberOfOnes> maxNumberOfOnesInARow){
    maxNumberOfOnesInARow=numberOfOnes;
}


//Output the result to a div
document.getElementById("output").innerHTML = "Antal 1'ere i træk: " + maxNumberOfOnesInARow;


