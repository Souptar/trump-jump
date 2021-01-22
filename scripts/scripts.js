var trump = document.getElementById("trump");
var barrier = document.getElementById("barrier");
function jump(){
    if(trump.classList == "animate"){return}
    trump.classList.add("animate");
    setTimeout(function(){
        trump.classList.remove("animate");
    },900);
}