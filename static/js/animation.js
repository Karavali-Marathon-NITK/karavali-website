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
		
		opacity: 1 - ele1y/600 +0.4
		
	});
	
	
	$(ele2).css({
		
		opacity: 1 - ele2y/600 +0.4
		
	});
	
	
	$(ele3).css({
		
		opacity: 1 - ele3y/600 +0.5
		
	});
	
  
  
});  

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


$(window).load(function(){
	 $('.loader').fadeOut(4000);
	myVar = setTimeout(showPage, 4000);
});
   

function showPage() {
	 document.getElementsByTagName("body")[0].style.visibility = "visible";
	 
}






