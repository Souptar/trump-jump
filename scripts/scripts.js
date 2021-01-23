var trump = document.getElementById("trump"); 
var barrier = document.getElementById("barrier");
var score = 0;
var scandalBoxString = "";
var scandalDate = "";
let loseString = "";


//array to iterate through for each barrier
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

// array to iterate through for the date over the game and also to show how far you got if you hit the barrier 
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


// start/restart button
function start(){
        var score = 0;
    var scandalBoxString = "";

    barrier.classList.add("startMoving"); // when start button pressed, barrier starts moving
    document.getElementById("startButton").style.display = "none" // hides start button 
    document.getElementById("lose").style.display = "none"; // hides 'you lose' screen if on screen
    document.getElementById("jumpButton").style.display = "block"; // shows jump button
    document.getElementById("trump").style.display = "block";  // shows trump if hidden
    document.getElementById("barrier").style.display = "block"; // shows barrier if hidden
    scandalBoxString = scandals[score];
    document.getElementById("scandalBox").innerHTML = scandalBoxString;

    
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump()
    }
}

// jump button functionality
function jump(){
    if(trump.classList == "animate"){return} // if 'animate class is already applied to trump div, stop
    trump.classList.add("animate"); // otherwise add animate class
    score = score + 1;
    console.log(score);
    setTimeout(function(){
        trump.classList.remove("animate");
    },900); // after 900ms (time for jump animaation to complete), remove class
}

// checks every 10ms if trump and barrier are touching
var checkDead = setInterval(function() {
    scandalBoxString = scandals[score];
    scandalDate = "";

    scandalDate = scandalDates[score];

    document.getElementById("scandalBox").innerHTML = scandalBoxString;
    let trumpTop = parseInt(window.getComputedStyle(trump).getPropertyValue("top")); //evaluate top position of Trump and parse as integer to remove 'px' from result
    let barrierLeft = parseInt(window.getComputedStyle(barrier).getPropertyValue("left")); //evaluate left position of Barrier and parse as integer to remove 'px' from result
    if(barrierLeft<95 && barrierLeft>-95 && trumpTop>=130){ //only true if Trump and Barrier are touching
        barrier.classList.remove("startMoving"); // stop animation
            document.getElementById("trump").style.display = "none"; // hides trump
            document.getElementById("barrier").style.display = "none"; // hides barrier
            loseString = "<h2>You lose, Don.<br>You only made it to "
            loseString = loseString + scandalDate + "</h2>";
            scandalDate = "";
            document.getElementById("lose").innerHTML = loseString;
            console.log(loseString)
            document.getElementById("lose").style.display = "inline-block"; // shows 'you lose' screen
            setTimeout(function (){ // delay so player doesnt click 'restart' as soon as it comes up
                document.getElementById("startButton").style.display = "block" // start button reappears
                document.getElementById("startButton").innerHTML = "Restart"; // changes text to restart
                document.getElementById("jumpButton").style.display = "none"; // hides jump button
                }, 500);
                score = score + 1;
                scandalBoxString = scandals[score];
                document.getElementById("scandalBox").innerHTML = scandalBoxString;
    }
}, 10);

