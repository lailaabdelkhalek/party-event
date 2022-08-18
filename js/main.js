$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $("#toggle-example").toggle('toggle'); // toggle collapse
    });
    
});

$(document).ready(function(){
    $("#toggle-btn2").click(function(){
      $("#toggle-example2").toggle('toggle'); // toggle collapse
    });
});

$(document).ready(function(){
    $("#toggle-btn3").click(function(){
      $("#toggle-example3").toggle('toggle'); // toggle collapse
    });
});

$(document).ready(function(){
    $("#toggle-btn4").click(function(){
      $("#toggle-example4").toggle('toggle'); // toggle collapse
    });
});



var countDate = new Date("July 20, 2023 00:00:00").getTime();

function newYear() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  newYear();
}, 1000);




var textarea = document.getElementById('mytxt'),
	msg = document.getElementById('message'),
	max = textarea.maxLength;

msg.textContent = max + " Remaining Charaters";

textarea.onkeyup = function () {
	'use strict';
	 var  written = this.value.length,
		  rem = max - written; 
	      msg.textContent = rem + " Remainging Charaters";
		 
	
	
};