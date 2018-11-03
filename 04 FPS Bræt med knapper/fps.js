/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');

//Bonusopgave
let kol1 = [0,0,0,0,0,0];
let kol2 = [0,0,0,0,0,0];
let kol3 = [0,0,0,0,0,0];
let kol4 = [0,0,0,0,0,0];
let kol5 = [0,0,0,0,0,0];
let kol6 = [0,0,0,0,0,0];
let kol7 = [0,0,0,0,0,0];
let columns = [kol1, kol2,kol3, kol4, kol5, kol6, kol7];

drawBoard();


//Optegning af Boardet
function drawBoard() {
    for(let i = 0; i<7;i++){
        for (let j=0;j<6;j++){
            drawCircle(25+i*53,25+j*53, 20);
        }
    }

}

//EventHandler for knapperne - colNo svarer til søjlens nummer - se i index.html
function putPieceInColumnNo(colNo){
    //Test alert - fjernes efter behov
    alert("Du trykkede på kolonne: " + colNo);
    //TODO - sæt en ny brik i kolonnenummer colNo
    let detRigtigeArray =  columns[colNo];
    for (let i = 0;i<detRigtigeArray.length;i++){
        if (detRigtigeArray[i] === 0){
            detRigtigeArray[i] = 1;
            drawPieceAt(colNo,detRigtigeArray.length-i-1, "red");
            i = detRigtigeArray.length;
        }
    }
}


//------Tegne funktioner------

function drawPieceAt(col, row, color) {
    drawCircle(25+col*53,25+row*53,20, color)
}

function drawCircle(x, y, r, fill) {
    //Fill the circle if fill is set
    if (fill){
        context.beginPath();
        context.arc(x,y,r,0,Math.PI*2);
        context.fillStyle = fill;
        context.fill();
    } else {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.stroke();
    }
}