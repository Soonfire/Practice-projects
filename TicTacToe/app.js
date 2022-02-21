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
let timesClicked = 0;
    for  (let i = 0; i < boxes.length; i++)
        boxes[i].addEventListener("click", function onlyX() {
            timesClicked++;
            console.log(boxes[i].length)
                if (timesClicked %2==0) {
                    boxes[i].innerHTML="X";
                    boxes[i].classList.add("disableClick");

                }
                else {
                    boxes[i].innerHTML="O";
                    boxes[i].classList.add("disableClick");
                }
        let container = document.querySelector(".container");
        if (boxes[0].innerHTML.indexOf("X")== false&& boxes[1].innerHTML.indexOf("X")== false&& boxes[2].innerHTML.indexOf("X")== false|| 
            boxes[3].innerHTML.indexOf("X")== false&& boxes[4].innerHTML.indexOf("X")== false&& boxes[5].innerHTML.indexOf("X")== false|| 
            boxes[6].innerHTML.indexOf("X")== false&& boxes[7].innerHTML.indexOf("X")== false&& boxes[8].innerHTML.indexOf("X")== false|| 
            boxes[0].innerHTML.indexOf("X")== false&& boxes[3].innerHTML.indexOf("X")== false&& boxes[6].innerHTML.indexOf("X")== false|| 
            boxes[1].innerHTML.indexOf("X")== false&& boxes[4].innerHTML.indexOf("X")== false&& boxes[7].innerHTML.indexOf("X")== false|| 
            boxes[2].innerHTML.indexOf("X")== false&& boxes[5].innerHTML.indexOf("X")== false&& boxes[8].innerHTML.indexOf("X")== false|| 
            boxes[0].innerHTML.indexOf("X")== false&& boxes[4].innerHTML.indexOf("X")== false&& boxes[8].innerHTML.indexOf("X")== false|| 
            boxes[2].innerHTML.indexOf("X")== false&& boxes[4].innerHTML.indexOf("X")== false&& boxes[6].innerHTML.indexOf("X")== false
            ){
                container.classList.add("disableClick");
                alert("Player X winRAR!")
            }
        else if (boxes[0].innerHTML.indexOf("O")== false && boxes[1].innerHTML.indexOf("O")== false && boxes[2].innerHTML.indexOf("O")== false || 
        boxes[3].innerHTML.indexOf("O")== false && boxes[4].innerHTML.indexOf("O")== false && boxes[5].innerHTML.indexOf("O")== false || 
        boxes[6].innerHTML.indexOf("O")== false && boxes[7].innerHTML.indexOf("O")== false && boxes[8].innerHTML.indexOf("O")== false || 
        boxes[0].innerHTML.indexOf("O")== false && boxes[3].innerHTML.indexOf("O")== false && boxes[6].innerHTML.indexOf("O")== false || 
        boxes[1].innerHTML.indexOf("O")== false && boxes[4].innerHTML.indexOf("O")== false && boxes[7].innerHTML.indexOf("O")== false || 
        boxes[2].innerHTML.indexOf("O")== false && boxes[5].innerHTML.indexOf("O")== false && boxes[8].innerHTML.indexOf("O")== false || 
        boxes[0].innerHTML.indexOf("O")== false && boxes[4].innerHTML.indexOf("O")== false && boxes[8].innerHTML.indexOf("O")== false || 
        boxes[2].innerHTML.indexOf("O")== false && boxes[4].innerHTML.indexOf("O")== false && boxes[6].innerHTML.indexOf("O")== false
            ){
            container.classList.add("disableClick");
            alert("Player O winRAR!")
        }
        else if (boxes[0].innerHTML !== "" && boxes[1].innerHTML !== "" && boxes[2].innerHTML !== "" &&
                boxes[3].innerHTML !== "" && boxes[4].innerHTML !== "" && boxes[5].innerHTML !== "" &&
                boxes[6].innerHTML !== "" && boxes[7].innerHTML !== "" && boxes[8].innerHTML !== "" 
        ); {
            alert("Draw!")
        }
    });
});
