var ele1 = document.getElementById("fade1");
var ele2 = document.getElementById("fade2");
var ele3 = document.getElementById("fade3");

$(window).scroll(function() {
	var screenPosition1 = ele1.getBoundingClientRect();
	var ele1y = screenPosition1.y
	
	var screenPosition2 = ele2.getBoundingClientRect();
	var ele2y = screenPosition2.y
	
	var screenPosition3 = ele3.getBoundingClientRect();
	var ele3y = screenPosition3.y

	ele1y = Math.abs(ele1y);
	ele2y = Math.abs(ele2y);
	ele3y = Math.abs(ele3y);
	
	
	$(ele1).css({
		
		opacity: 1 - ele1y/300 +0.4
		
	});
	
	
	$(ele2).css({
		
		opacity: 1 - ele2y/300 +0.4
		
	});
	
	
	$(ele3).css({
		
		opacity: 1 - ele3y/300 +0.5
		
	});
	
  
  
});  



// set the date we're counting down to
var target_date = new Date('Jan, 31, 2020').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <label>Days</label></span> <span class="hours">' + hours + ' <label>Hrs</label></span> <span class="minutes">'
    + minutes + ' <label>Min</label></span> <span class="seconds">' + seconds + ' <label>Sec</label></span>';  
 
}, 1000);
$(document).ready(function() {
          CountDownTimer('01/01/2020 06:0 AM', 'countdown');
  });







