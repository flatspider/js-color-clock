

/*

console.log the current time on page load
console.log the current time every second
Display the current time every second
Display the current time, padded with zeros to be exactly two digits long, every second
console.log the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, console.log 0.5)
Using the percent above, dynamically modify the length of the timer bar
console.log a hexidecimal color that is based on the current second, every second

Dynamically update the background color of the clock using the hexidecimal color

Display the generated color's hex value on hover
Mission Accomplished!

*/


var hoverTime = false;


function timeUpdate(){

   
    var timer = new Date(); // Pulls the time from the computer.

    // Get the normal time:
    var hours = timer.getHours().toString().padStart(2, "0"); // Turn num to string. Adds a zero to the front if return is not two digits.
    var minutes = timer.getMinutes().toString().padStart(2, "0"); 
    var seconds = timer.getSeconds().toString().padStart(2, "0");

    // Get the hexadecimal time:
    var hexHours = timer.getHours().toString(16).padStart(2, "0");
    var hexMinutes = timer.getMinutes().toString(16).padStart(2, "0");
    var hexSeconds = timer.getSeconds().toString(16).padStart(2, "0");


    // Selects clock display.
    const clockView = document.querySelector(".clock-display");


    // Sets the hoverTime variable based on the mouse position.
    clockView.addEventListener('mouseover', () => {

        
        hoverTime = true;
        
    
    });
    clockView.addEventListener('mouseout', () => {

        hoverTime = false;
    
    });



    // Checks if the clockView element is currently being hovered over and determines which numbers to display.
    if (hoverTime === false) {
        clockView.textContent = hours + ":" + minutes + ":" + seconds;
    } else {
        clockView.textContent = '#' + hexHours + ':' + hexMinutes + ':' + hexSeconds;
    }

    
    // Creates growing and shrinking progress bar.
    var numSeconds = timer.getSeconds();
    let secondProgress = numSeconds / 60;
    const clockBar = document.querySelector(".clock-progress-bar");
    let barWidth = 224; // Magic number.
    let dynamicWidth = barWidth * secondProgress;
    clockBar.setAttribute('style', 'width:' + dynamicWidth + 'px');
    clockBar.clientWidth = clockBar.clientWidth * secondProgress;
    
    
    // This sets the clock background color to three random RGB values.
    const clockBackground = document.querySelector(".clock");
    var color1 = Math.floor(Math.random()*255); // Experimental color
    clockBackground.setAttribute('style', "background: rgb(" + color1 + ', ' + Math.random()*255 + ', ' + Math.random()*255 + ')' );
    

    // Currently set to call the function once a second.
    setTimeout(timeUpdate, 1000);

}

timeUpdate(); // Initial function call.






