/**
 * Created by Christian on 06-02-2018.
 */

let antalCirkler = Number(prompt("Indtast antal cirkler"));



for (let i = 0; i<antalCirkler;i++){
    drawCircle(25 + i*40, 25 + i*40, i*5);
}


function drawCircle(x, y, r) {
    let ctx = document.getElementById("mycanvas").getContext('2d');
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.stroke();
}

