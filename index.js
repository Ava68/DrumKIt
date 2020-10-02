var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //this is the identity of the button that trigger the event listenrs
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        butonAnimation(buttonInnerHTML);


    });



}



document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    butonAnimation(event.key);

});

//for playing song
document.querySelector(".play").addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);




});
//for pausing song
document.querySelector(".pause").addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);


});


var song = new Audio('sounds/eyeofthetiger.mp3');//song
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "play the song":

            song.play();

            break;
        case "pause the song":
            song.pause();
            break;



        default:
            alert("Wrong input");
            break;
    }

}

function butonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    //adding press class
    activeButton.classList.add("pressed");

    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    // 1st parameter is the anonymous function that will be executed.
    // 2nd parameter is used for time

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);



}





