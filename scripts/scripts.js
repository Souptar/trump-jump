var trump = document.getElementById("trump"); 
var barrier = document.getElementById("barrier");
function jump(){
    if(trump.classList == "animate"){return} // if 'animate class is already applied to trump div, stop
    trump.classList.add("animate"); // otherwise add animate class
    setTimeout(function(){
        trump.classList.remove("animate");
    },900); // after 900ms (time for jump animaation to complete), remove class
}

var checkDead = setInterval(function() {
    let trumpTop = parseInt(window.getComputedStyle(trump).getPropertyValue("top")); //evaluate top position of Trump and parse as integer to remove 'px' from result
    let barrierLeft = parseInt(window.getComputedStyle(barrier).getPropertyValue("left")); //evaluate left position of Barrier and parse as integer to remove 'px' from result
    if(barrierLeft<95 && barrierLeft>-95 && trumpTop>=130){ //only true if Trump and Barrier are touching
        barrier.style.animation = "none"; // stop animation
        alert("Game Over"); //placeholder alert
        barrier.style.animation = "barrier 2s infinite linear"; // after alert is dismissed starts again
    }
}, 10);

