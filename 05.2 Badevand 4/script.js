
let badeVand =  [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10,1,1,1,];

let numberOfOnes = 0;
let maxNo = 0;

//TODO count number of ones IN A ROW:
for( let i = 0; i<badeVand.length;i++){
    if (badeVand[i]===1){
        numberOfOnes++;
    } else {
        if (numberOfOnes>maxNo){
            maxNo = numberOfOnes;
        }
        numberOfOnes = 0;
    }

}


//Output the result to a div
document.getElementById("output").innerHTML = "Antal 1'ere i træk: " + maxNo;


