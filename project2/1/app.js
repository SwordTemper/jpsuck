var button =document.getElementById('test');
// button.innerHTML = 'Greetings';

function myFunction() {
    document.getElementById('test').innerHTML = 'Greetings';
}

var thirdButton =document.getElementById('test');

function mySecondFunction() {
    document.getElementById('test').innerHTML = '';
}


function newPicture() {

    document.getElementById('image').src="carAni.gif";

}
function oldPicture() {

    document.getElementById('image').src="car.png";

}