/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');
let noRows = 6;
let noCols = 7;

let x = Number(prompt("Hvor skal der være en brik? Indtast X: "));
let y = Number(prompt("Hvor skal der være en brik? Indtast Y: "));

drawBoardWithPieceAt(x,y);


function drawBoardWithPieceAt(x, y) {
    //TODO Skriv noget kode, der kan tegne et 'fire på stribe' bræt;
    drawBoard();
    drawPieceAt(x, y, "red");

}

//TODO
function drawBoard() {
    for (let i = 0; i<noCols;i++){
        for (let j = 0; j<noRows; j++){
            drawCircle(25+i*50, 25+ j*50, 20);
        }
    }

}
//TODO
function drawPieceAt( x, y, color) {
    context.beginPath();
    context.arc(25+x*50, 25+y*50,20,0,Math.PI*2);
    context.fillStyle = color;
    context.fill();
}

function drawCircle(x,y,r){
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.stroke();
}




//------------------
//TODO Implementeres senere...
function removePieceAt(context, x,y){

}
//TODO Implementeres senere...
function showScore(player1Score, player2Score){

}
//TODO Implementeres senere...
function showWinner(playerName){

}