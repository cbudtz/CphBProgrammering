/**
 * Created by Christian on 08-02-2018.
 */

let temperature = Number(prompt("Indtast temperaturen:"));
let sunshine = confirm("Lad solen skinne?"); //confirm returnerer true eller false;


//TODO: Tegn To cirkler som snemandens nederste bolde
circle(50,300,30); // Sådan kunne den nederste se ud


//TODO: Tegn hovedet med face() funktionen:


function face(x,y,radius){
    //Vi kan lige så godt bruge vores cirkel funktion til at tegne cirkel om ansigtet
    circle(x,y);
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    //TODO: Tegn øjne

    //TODO: Tegn glad mund hvis det er rart at være snemand eller sur mund, hvis det er surt.
    //Funktionen findes allerede - mouth() - se nederst

}

function circle(x,y, radius){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    //TODO: draw a circle

}

function hat(x,y){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    //TODO: Tegn eventuelt snemandends hat se: https://www.w3schools.com/tags/canvas_rect.asp
}
/**
 *
 * @param x - angiver x placeringen
 * @param y - angiver y placeringen
 * @param size - angiver mundens bredde
 * @param happy - angiver om det er en glad eller sur mund
 */
function mouth(x,y, size, happy){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    if (happy) {
        canvas.arc(x,y, size,(1/4)*Math.PI,(3/4)*Math.PI)
    } else {
        canvas.arc(x,y+(5/3)*size,size,(-3/4)*Math.PI,(-1/4)*Math.PI)
    }
    canvas.stroke();
}