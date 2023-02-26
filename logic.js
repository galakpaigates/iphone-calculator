const form = document.getElementById('onlyForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});
        
//NOTE: This code isnt necessary because you add the "disabled" attribute to the <textarea> element in HTML. 
//      - adding the disabled attribute to a <textarea> element in HTML will block all events and interactions with it.
// const displayArea = document.getElementById('display');
// displayArea.addEventListener('keydown', function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         event.target.form.submit();
//     }
// });
        
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        console.log('Enter key was pressed');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.switch-theme').onclick = function changeColors() {
        if (document.querySelector('.container').style.backgroundColor == "black") 
            document.querySelector('.container').style.backgroundColor = "wheat"
        else
            document.querySelector('.container').style.backgroundColor = "black"

        if (document.body.style.backgroundColor == "sandybrown") 
            document.body.style.backgroundColor = "tan"
        else
            document.body.style.backgroundColor = "sandybrown"

        if (document.querySelector('.switch-theme').style.backgroundColor == "wheat")
            document.querySelector('.switch-theme').style.backgroundColor = "tan"
        else
            document.querySelector('.switch-theme').style.backgroundColor = "wheat"

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