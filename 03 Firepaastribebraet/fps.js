/**
 * Created by Christian on 07-02-2018.
 */

let x = Number(prompt("Hvor skal der være en brik? Indtast X: "));
let y = Number(prompt("Hvor skal der være en brik? Indtast Y: "));

function drawBoardWithPieceAt(x, y) {
    let canvas = document.getElementById("mycanvas");
    let context = canvas.getContext("2d");
    //TODO Skriv noget kode, der kan tegne et 'fire på stribe' bræt;
    drawBoard(context);
    drawPieceAt(context, x, y);

}

//TODO
function drawBoard(context) {

}
//TODO
function drawPieceAt(context, x, y, color) {

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