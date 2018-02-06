/**
 * Created by Christian on 06-02-2018.
 */

//Sådan tegner man en cirkel i 20, 20 med radius 10
let canvas = document.getElementById("mycanvas").getContext('2d');
canvas.beginPath();
canvas.arc(20,20,10,0,Math.PI*2);
canvas.fillStyle = 'red';
canvas.fill();

