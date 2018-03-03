/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');

let x = Number(prompt("Hvor skal der være en brik? Indtast X: "));
let y = Number(prompt("Hvor skal der være en brik? Indtast Y: "));

drawBoard(x,y);


//TODO
function drawBoard() {
    for(let i = 0; i<7;i++){
        for (let j=0;j<6;j++){
            drawCircle(25+i*53,25+j*53, 20);
        }
    }

}

//TODO
function drawPieceAt(x, y, color) {


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