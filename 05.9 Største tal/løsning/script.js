let array = [2,5,1,7,2,5,8,5,-2];

let largestNumber = array[0];

for (let i = 1; i<array.length;i++){
    if (array[i] > largestNumber) {
        largestNumber = array[i];
    }
}

alert(largestNumber);
