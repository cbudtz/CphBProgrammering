/**
 * Created by Christian on 18-02-2018.
 */

//TODO tilføj data!
let badeVand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];

let freezingDays = 0;
//TODO tæl frostdage og udskriv
for(let i =0 ; i<badeVand.length ; i++){
    if (badeVand[i]<0){freezingDays++};
}

document.write("Antal frost-dage: " + freezingDays);

