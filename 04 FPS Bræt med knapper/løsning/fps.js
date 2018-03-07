/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');

let column0 = [0,0,0,0,0,0];
let column1 = [0,0,0,0,0,0];
let column2 = [0,0,0,0,0,0];
let column3 = [0,0,0,0,0,0];
let column4 = [0,0,0,0,0,0];
let column5 = [0,0,0,0,0,0];
let column6 = [0,0,0,0,0,0];

let columns = [column0,column1,column2, column3, column4, column5, column6];


drawBoard();


function putPieceInColumnNo(no){
    let activeColumn = columns[no];

    for (let i=0;i <activeColumn.length;i++){
        if (activeColumn[i] ===0){
            activeColumn[i] = 1; //sæt en brik på første ledige plads
            drawPieceAt(no,5-i,20,'red'); //Tegn den også
            i = activeColumn.length //afslut ved at sætte i så højt at løkken afsluttes

        }
    }
    drawPieceAt();
}


//TODO
function drawBoard() {
    for(let i = 0; i<7;i++){
        for (let j=0;j<6;j++){
            drawCircle(25+i*53,25+j*53, 20);
        }
    }
}

//TODO
function drawPieceAt(x, y, r, color) {
    context.beginPath();
    context.arc(25+x*53, 25 + y*53,r,0,Math.PI*2);
    context.fillStyle = color ;
    context.fill();

}



function drawCircle(x, y, r) {

    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.stroke();
}



//------------------
//TODO Implementeres senere...
function removePieceAt(x,y){

}
//TODO Implementeres senere...
function showScore(player1Score, player2Score){

}
//TODO Implementeres senere...
function showWinner(playerName){

}