document.getElementById("num").innerHTML = 1234567890;
document.getElementById("deci").innerHTML = 0.999;

document.getElementById("doubledQ").innerHTML = "Hello World";
document.getElementById("singleQ").innerHTML = 'HELLO WORLD';

let greeting = "welcome to javascript";
const pi = 3.14;
var isActive = true;


document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let aa = 10;
var bb = 20;
const cc = 30;

document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;

function changeValue() {
    aa = 100;
    bb = 200;
  //  cc = 300; // This will cause an error because cc is a constant
    document.getElementById("a").innerHTML = aa;
    document.getElementById("b").innerHTML = bb;
    document.getElementById("c").innerHTML = cc;
}