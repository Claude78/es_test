/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sx = Math.random() * 1000;
var alto = Math.random() * 100;
var indice=0;

document.getElementById("arancia").style.left = sx + "px";
document.getElementById("arancia").style.top = alto + "px";

document.querySelector(".nord").onclick = function () {
    muovi("#arancia", 0, -5);

};
document.querySelector(".sud").onclick = function () {
    muovi("#arancia", 0, 5);

};
document.querySelector(".est").onclick = function () {
    muovi("#arancia", 5, 0);
};
document.querySelector(".ovest").onclick = function () {
    muovi("#arancia", -5, 0);
};



function muovi(aran, x, y) {
    let naran = document.querySelector(aran);
    let pos1 = parseFloat(naran.style.left);
    let pos2 = parseFloat(naran.style.top);

    let nx = pos1 + x;
    let ny = pos2 + y;

    naran.style.left = nx + "px";
    naran.style.top = ny + "px";

    console.log(naran, nx, ny);
    }