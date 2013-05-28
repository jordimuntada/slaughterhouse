/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
Url: http://www.javascriptkit.com/script/script2/countup.shtml
*/


/* https://gist.github.com/FrancoB411/1470980 */

var c=0;
var t;
var timer_is_on=0;
 
function timedCount()
{
document.getElementById('txt').value=c;
c=c+1;
t=setTimeout("timedCount()",1000);
}
 
function doTimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();
  }
}
 
function stopCount()
{
clearTimeout(t);
timer_is_on=0;
document.getElementById('txt').value=c;
}
 
function resetCount()
{
c=0
document.getElementById('txt').value=c;
}