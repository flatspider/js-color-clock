

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

var timer; // Need access to this variable outside of function call.


function timeUpdate(){
   
    var timer = new Date(); // Pulls the time from the computer.


    var hours = timer.getHours().toString().padStart(2, "0"); // Turn num to string. Adds a zero to the front if return is not two digits.
    var minutes = timer.getMinutes().toString().padStart(2, "0"); 
    var seconds = timer.getSeconds().toString().padStart(2, "0");

    // Updates clock display.
    const clockView = document.querySelector(".clock-display");
    clockView.textContent = hours + ":" + minutes + ":" + seconds;

    // Creates growing and shrinking progress bar.
    var numSeconds = timer.getSeconds();
    let secondProgress = numSeconds / 60;
    const clockBar = document.querySelector(".clock-progress-bar");
    let barWidth = 224; // Magic number.
    let dynamicWidth = barWidth * secondProgress;
    clockBar.setAttribute('style', 'width:' + dynamicWidth + 'px');
    clockBar.clientWidth = clockBar.clientWidth * secondProgress;




    // Change the background gradient every second that the clock updates.

    const clockBackground = document.querySelector(".clock");

    clockBackground.setAttribute('style', "background: rgb(" + Math.random()*255 + ', ' + Math.random()*255 + ', ' + Math.random()*255 + ')' );













    
    setTimeout(timeUpdate, 250);

}

timeUpdate(); // Initial function call.

// Acquire the current time every second. 


// Use the . class selector

// Use querySelector to modify the clock.



// Pad the time return with zeros.

// Determine what percentage of a minute has passed. Value / 60 = percentage

// Set the length of the under timer bar to reflect the percentage. Width * percentage








// Get a hexadecimal value for the gradient in the background.

// document query the background clock class

// read out the hexadecimal value

// update the hex value to change the background color

// if when you hover over the clock, read out the hex value

// Update the hexadecimal each second to read out to the gradient. 

// On hover over the clock, reveal the hexadecimal r g b value. 



