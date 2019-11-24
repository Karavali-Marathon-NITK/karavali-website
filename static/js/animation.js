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