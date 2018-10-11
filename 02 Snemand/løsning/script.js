/**
 * Created by Christian on 08-02-2018.
 */
/**
 * Created by Christian on 08-02-2018.
 */

let temperature = Number(prompt("Indtast temperaturen:"));
let sunshine = confirm("Lad solen skinne?")


circle(50,260,50);
circle(50,170,40);
face(50,100,30);



function face(x,y,radius){
    //Vi kan lige så godt bruge vores cirkel funktion til at tegne cirkel om ansigtet
    circle(x,y, radius);
    let canvas = document.getElementById("snowcanvas").getContext('2d');

    circle(x-10,y-10, radius/5);
    circle(x+10,y-10, radius/5);


    let happy = !((sunshine && temperature > -5) || temperature > 0)
    mouth(x,y,radius,happy);

}

function circle(x,y, radius){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(x,y,radius,0,Math.PI * 2);
    canvas.stroke();

}

function hat(x,y){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
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
        canvas.arc(x,y-size/4, size,(1/4)*Math.PI,(3/4)*Math.PI)
    } else {
        canvas.arc(x,y+(3/2)*size,size,(-3/4)*Math.PI,(-1/4)*Math.PI)
    }
    canvas.stroke();
}