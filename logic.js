document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('onlyForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        });

    let backspace = document.querySelector('.backspaceHolderDiv')
    
    backspace.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let switchTheme = document.querySelector('.switch-theme')
    
    switchTheme.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let buttonOne = document.querySelector('.button-one')
    
    buttonOne.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let buttonTwo = document.querySelector('.button-two')
    
    buttonTwo.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let buttonThree = document.querySelector('.button-three')
    
    buttonThree.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let buttonFour = document.querySelector('.button-four')
    
    buttonFour.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

    let buttonFive = document.querySelector('.button-five')
    
    buttonFive.addEventListener('click', function playSound() {
        let sound = new Audio("./click.mp3")

        sound.play()
    });

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
