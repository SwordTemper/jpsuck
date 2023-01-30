
function scooterNewId(){
    document.getElementById('scooter').id = 'scooterAni';
    document.getElementById('scooterAni').src = 'img/scooterAni.gif';


    
    var left = 0;
    var tank = document.getElementById('scooterAni');
    var timerId = 0;
    
    console.log(tank);
    
    timerId = setInterval(
        function() {
            if( left++ >= 600) {
                clearInterval( timerId );
            }
            tank.style.left = left + 'px';
        },1);
        


}





