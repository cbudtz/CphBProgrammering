/**
 * Created by Christian on 06-02-2018.
 */
circle(20,20);
circle(20,50);
circle(20,80);

function circle(x,y) {
    let canvas = document.getElementById("mycanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(x, y, 10, 0, Math.PI * 2);
    canvas.fillStyle = 'red';
    canvas.fill();
}
