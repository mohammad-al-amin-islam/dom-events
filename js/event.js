function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//handle blue button by setting function name;
const getButton = document.getElementById('make-blue-color');
//just set the name of the function
getButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

//with anonymous function
const green = document.getElementById('make-green');
//anonymous function
green.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle event using addEventlistener
const goldenrod = document.getElementById('make-goldenRod');
goldenrod.addEventListener('click', makeGoldenrod);

function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenRod';
}

//add event listener
const hotpink = document.getElementById('make-hotpink');
hotpink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//without declaring variable
document.getElementById('light-blue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lightblue';
})