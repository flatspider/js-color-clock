

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

var timer; // Need access to this variable outside of function call. Not working.

var hoverTime = false;


function timeUpdate(){


    // Create a logic evaluation to determine what is displayed on the clock.
   
    var timer = new Date(); // Pulls the time from the computer.

    

    // Get the normal time:
    var hours = timer.getHours().toString().padStart(2, "0"); // Turn num to string. Adds a zero to the front if return is not two digits.
    var minutes = timer.getMinutes().toString().padStart(2, "0"); 
    var seconds = timer.getSeconds().toString().padStart(2, "0");

    // Get the hexadecimal time:
    var hexHours = timer.getHours().toString(16).padStart(2, "0");
    var hexMinutes = timer.getMinutes().toString(16).padStart(2, "0");
    var hexSeconds = timer.getSeconds().toString(16).padStart(2, "0");

    console.log('#' + hexHours + ':' + hexMinutes + ':' + hexSeconds);
    

    // Updates clock display.
    const clockView = document.querySelector(".clock-display");


    clockView.addEventListener('mouseover', () => {

        
        hoverTime = true;
        
    
    });


    clockView.addEventListener('mouseout', () => {

        hoverTime = false;
    
    });




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




    var color1 = Math.floor(Math.random()*255);
    //var hex1 = color1.toString(16);
    //console.log(hex1);

    // Change the background gradient every second that the clock updates.

    const clockBackground = document.querySelector(".clock");

    clockBackground.setAttribute('style', "background: rgb(" + color1 + ', ' + Math.random()*255 + ', ' + Math.random()*255 + ')' );
    
    // HEX: clockBackground.setAttribute('style', "background: radial-gradient(#' + Math.random()*255 + ', ' + Math.random()*255 + ', ' + Math.random()*255 + ')' );
    // background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);



    
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

const clockView = document.querySelector(".clock-display");


