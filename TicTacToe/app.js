/* /* document.addEventListener('DOMContentLoaded',  (event) => {
    const box = document.querySelector('.box')
    let squares = document.querySelectorAll('.box')
    const width = 30
});
    let timesClicked = 0 ;
    let square = document.getElementsByClassName(".box");


    square.onclick = function() {
        timesClicked++;
        if (timesClicked%2==0) {
            square.innerHTML="X"
        }
        else {
            square.innerHTML="O"
        }
    } */


/* document.addEventListener('DOMContentLoaded',  (event) => {
let squares = document.querySelector(".container").children ;
console.log(squares);
let timesClicked = 0 ;
for (square of squares) {
    square.onclick = function() {
    timesClicked++;
    if (timesClicked%2==0) {
        square.innerHTML="X"
    }
    else {
        square.innerHTML="O"
    }
}
}
});  */

/* document.addEventListener('DOMContentLoaded',  (event) => {
let div1 = document.getElementById('box1');
let div2 = document.getElementById('box2');
let div3 = document.getElementById('box3');
let div4 = document.getElementById('box4');
let div5 = document.getElementById('box5');
let div6 = document.getElementById('box6');
let div7 = document.getElementById('box7');
let div8 = document.getElementById('box8');
let div9 = document.getElementById('box9');
let timesClicked = 0;

function cross (event) {
    timesClicked++;
    if (timesClicked%2==0) {
        square.innerHTML="X"
    }
    else {
        square.innerHTML="O"
    }
}
let square = document.querySelector('.container').children
addEventListener("click", cross)
console.log(square)
}); */
/* 
document.addEventListener('DOMContentLoaded',  (event) => {
    let div1 = document.getElementById('box1');
    let div2 = document.getElementById('box2');
    let div3 = document.getElementById('box3');
    let div4 = document.getElementById('box4');
    let div5 = document.getElementById('box5');
    let div6 = document.getElementById('box6');
    let div7 = document.getElementById('box7');
    let div8 = document.getElementById('box8');
    let div9 = document.getElementById('box9');
    let timesClicked = 0;
    let squares = document.querySelectorAll('.box')
    for (i = 0; i < squares.length; i++) {
    function cross (event) {
        timesClicked++;
        if (timesClicked%2==0) {
            squares.innerHTML[i]="X"
        }
        else {
            squares.innerHTML[i]="O"
        }
    }
    }

    addEventListener("click", cross)
    console.log(squares)
    console.log(squares[2])
}); */
document.addEventListener('DOMContentLoaded', () => {
let boxes = document.getElementsByClassName('box');
let clicked = false;
let timesClicked = 0;
    for  (let i = 0; i < boxes.length; i++)
        boxes[i].addEventListener("click", function onlyX() {
            timesClicked++;
                if (timesClicked %2==0) {
                    boxes[i].innerHTML="X";


                }
                else {
                    boxes[i].innerHTML="O";
                }
        
    });
});