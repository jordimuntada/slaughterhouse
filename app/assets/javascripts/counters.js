/*
 * *****************************************************************************
 * *****************************************************************************
 * *****************************************************************************
 */

/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
Url: http://www.javascriptkit.com/script/script2/countup.shtml
*/


/* https://gist.github.com/FrancoB411/1470980 */



/*	http://www.gieson.com/Library/projects/utilities/countdown/?ref=lvraa	*/

/*
 * *****************************************************************************
 * *****************************************************************************
 * *****************************************************************************
 */

// Let's get started in designing my own JavaScript code
// URL from where I got the tutorial to develop that counter-up:
//	http://www.dailycoding.com/Posts/object_oriented_programming_with_javascript__timer_class.aspx

/*
 * The next URL takes you to other distinct tutorial in order to implement a similar count-up JavaScript code:
 * http://praveenlobo.com/techblog/javascript-countup-timer/
 */

// Declaring class "Timer"
var Timer = function()
{
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 1000;
    
    // Property: Whether the timer is enable or not
    this.Enable = new Boolean(false);
    
    // Event: Timer tick
    this.Tick;
    
    // Member variable: Hold interval id of the timer
    var timerId = 0;
    
    // Member variable: Hold instance of this class
    var thisObject;
    
    // Function: Start the timer
    this.Start = function()
    {
        this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
            }, thisObject.Interval);
        }
    };
}

var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;
var obj = new Timer();
obj.Interval = 1000;
obj.Tick = timer_tick;
obj.Start();

function timer_tick()
{
	seconds  = seconds + 1;
	if (seconds == 60) { 
		seconds = 0;
		minutes = minutes + 1;
	}
	if (minutes == 60)
	{
		minutes = 0;
		hours = hours + 1;
	}
	if (hours == 24)
	{
		hours = 0;
		days = days + 1;
	}
	document.getElementById("secondstime").innerHTML = seconds;
	document.getElementById("minutestime").innerHTML = minutes;
	document.getElementById("hourstime").innerHTML = hours;
	document.getElementById("daystime").innerHTML = days;
}

/*
 * From now on the animal killings counter is implemented.
 * The counter proportions are extracted out of http://www.occupyforanimals.org/animal-kill-counter.html
 */

// Global variables: ___________________________________________________________________

var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var rate = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

// Functions: __________________________________________________________________________

function StartKillCounter() {
	var millions = [ 90000, 45895, 2262, 1244, 857, 691, 533, 515, 345, 292, 65, 63, 23, 16, 4, 4, 3, 2 ];
	var perSecond = 8;
	for (var i = 0; i < counts.length; ++i) 
		rate[i] = millions[i] * 1000000 / 365 / 24 / 60 / 60 / perSecond;
	setInterval(NewCounts, 1000 / perSecond);
}

function NewCounts() {
	var num, thous, str;
	for (var i = 0; i < counts.length; ++i) {
		counts[i] += rate[i];
		num = Math.round(counts[i]);
		str = "";
		while (num > 1000) {
			thous = num % 1000;
			if (thous < 10)
				thous = "00" + thous;
			else if (thous < 100)
				thous = "0" + thous;
			str = "," + thous + str;
			num = Math.floor(num / 1000);
		}
		str = num + str;
		document.getElementById("count" + i).innerHTML = str;
	}
}