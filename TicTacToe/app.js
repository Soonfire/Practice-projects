document.addEventListener('DOMContentLoaded',  () => {
    const box = document.querySelector('.box')
    let squares = document.querySelectorAll('.box')
    const width = 30
})
    let timesClicked = 0
    let square = document.getElementsByClassName(".box")


    square.onclick = function() {
        timesClicked++;
        if (timesClicked%2==0) {
            square.innerHTML="X"
        }
        else {
            square.innerHTML="O"
        }
    }
