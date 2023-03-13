document.addEventListener("DOMContentLoaded", function() {
    function playSound() {
        new Audio("./click.mp3").play()
    }

    document.querySelector('.buttons-wrapper').addEventListener('click', function(event) {
        if (event.target.type === "button") {
            playSound()
        }
    })

    document.querySelector('.switch-theme').onclick = function changeColors() {
        if (document.querySelector('.container').style.backgroundColor == "black")
            document.querySelector('.container').style.backgroundColor = "wheat"
        else
            document.querySelector('.container').style.backgroundColor = "black"

        if (document.body.style.backgroundColor == "black") 
            document.body.style.backgroundColor = "tan"
        else
            document.body.style.backgroundColor = "black"

        if (document.querySelector('.switch-theme').style.backgroundColor == "wheat")
            document.querySelector('.switch-theme').style.backgroundColor = "tan"
        else
            document.querySelector('.switch-theme').style.backgroundColor = "wheat"

        if (document.querySelector('.switch-theme').innerHTML == "Light Theme")
            document.querySelector('.switch-theme').innerHTML = "Dark Theme"

        else 
            document.querySelector('.switch-theme').innerHTML = "Light Theme"

        if (document.querySelector('.first-three').style.backgroundColor == "wheat")
            document.querySelector('.first-three').style.backgroundColor = "tan"
        else
            document.querySelector('.first-three').style.backgroundColor = "wheat"

        if (document.querySelector('#plusMinus').style.backgroundColor == "wheat")
            document.querySelector('#plusMinus').style.backgroundColor = "tan"
        else
            document.querySelector('#plusMinus').style.backgroundColor = "wheat"

        if (document.querySelector('#percent').style.backgroundColor == "wheat")
            document.querySelector('#percent').style.backgroundColor = "tan"
        else
            document.querySelector('#percent').style.backgroundColor = "wheat"

        if (document.querySelector('.header').style.backgroundColor == "black")
            document.querySelector('.header').style.backgroundColor = "tan"
        else
            document.querySelector('.header').style.backgroundColor = "black"

        if (document.querySelector('.header').style.color == "white")
            document.querySelector('.header').style.color = "black"
        else
            document.querySelector('.header').style.color = "white"

        if (document.querySelector('.header').style.boxShadow == "none")
            document.querySelector('.header').style.boxShadow = "0px 0px 15px gray"
        else
            document.querySelector('.header').style.boxShadow = "none"

        if (document.querySelector('.backspaceHolderDiv').style.backgroundColor == "wheat")
            document.querySelector('.backspaceHolderDiv').style.backgroundColor = "tan"
        else
            document.querySelector('.backspaceHolderDiv').style.backgroundColor = "wheat" 
    };
});
