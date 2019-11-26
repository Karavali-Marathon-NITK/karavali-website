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


var day;
var sec;
var ticker;

function getSeconds() {
	let now 			= new Date();
	let next			= new Date(2020, 0, 13, 5, 30, 00, 00 );
	
	let current 	= now.getTime();
	let nextTime	= next.getTime();
	let diff			= parseInt((next - now)/1000);
	
	startTimer (diff);
}

function startTimer(secs) {
	sec = parseInt(secs);
	ticker = setInterval("tick()", 1000);
	tick();
}

function tick() {
	let secs = sec;
	
	if (secs > 0) {
		sec--;
	} else {
		clearInterval(ticker);
		getSeconds();
	}

	
	let days = Math.floor(secs/86400);
	secs %= 86400;
	let hours = Math.floor(secs/3600);
	secs %= 3600;
	let mins = Math.floor(secs/60);
	secs %= 60;
	
	
	
	$('#days').text(days);
	$('#hours').text(((hours < 10) ? '0' : '') + hours);
	$('#minutes').text(((mins < 10) ? '0' : '') + mins );
	$('#seconds').text(((secs < 10) ? '0' : '') + secs );
}

function animate_top (){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});

		$('#back-to-top').click(function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$('#back-to-top').tooltip('show');
}

$(document).ready(function() {
	tick();
    animate_top();
})





