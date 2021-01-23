var trump = document.getElementById("trump"); 
var barrier = document.getElementById("barrier");
let scandals = [
    '"Mexicans = criminals"',
    'Muslim ban',
    'Jeb Bush',
    'Ted Cruz',
    'Access Hollywood tape',
    'Presidential debates',
    'Election 2016',
    'Alternative facts', 
    'Scaramucci', 
    '"little rocket man"', 
    'Stormy Daniels', 
    'Kids in cages', 
    'Brett Kavanaugh', 
    'Ukraine phone call', 
    'Buying Greenland', 
    'Weather map Sharpie', 
    'Impeachment #1', 
    'COVID-19 Response', 
    'Amy Coney Barrett'
]
let scandalDates = [
    "June 2015",
    "December 2015",
    "February 2016",
    "May 2016",
    "October 2016",
    "October 2016",
    "November 2016",
    "January 2017",
    "July 2017",
    "September 2017",
    "January 2018",
    "June 2018",
    "September 2018",
    "July 2019",
    "August 2019",
    "September 2019",
    "December 2019",
    "2020",
    "October 2020",
]


function start(){
    barrier.classList.add("startMoving"); // when start button pressed, barrier starts moving
    document.getElementById("startButton").style.display = "none" // hides start button 
}

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
        barrier.classList.remove("startMoving"); // stop animation
        alert("Game Over"); //placeholder alert
        document.getElementById("startButton").style.display = "inline-block" // start button reappears

    }
}, 10);

