let seconds = 00;
let minutes = 00;
// called when the page loads to begin the timer
function startTimer() 
{
   // 1000 milliseconds = 1 second
   window.setInterval( "updateTime()", 1000 );
}

// called every 1000 ms to update the timer
function updateTime()
{
   ++seconds;                
   document.getElementById( "soFar" ).innerHTML = seconds;
   if (seconds === 59) {
      seconds= 0,

      setTimeout(() => {
         ++minutes
         document.getElementById( "mins" ).innerHTML = minutes;
         },1000)
   }
}


//from http://www.java2s.com/ref/javascript/javascript-dom-body-onload-event-handler.html
//needed help on how to make the timer, I got stuck on how to make the amount increase, after looking it up i then added an if statement to add minutes as well.