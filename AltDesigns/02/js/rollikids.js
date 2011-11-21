var tempHeight = 0;
var backgroundImages = 0;
$(document).ready(function(){

  $('#hero .span16').cycle({
    fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    timeout: 4000,  // milliseconds between slide transitions (0 to disable auto advance) 
    speed: 2000,
  });
  
  $('#header .pictures').cycle({
	  fx: 'fade',
	  timeout: 10000,
	  speed: 2000
  });
  
  $('.secondlink').bind('mouseover', function(){
	  $(this).switchClass('secondlink', 'secondlinkHover', 500);
  }).bind('mouseout', function(){
	  $(this).switchClass('secondlinkHover', 'secondlink', 200);
  });
  
    // call sticky function on resize
    $(window).resize(function() {
      makeSticky();
    });
    
    $("#linkScroller").containedStickyScroll({
  	  duration: 300,
  	  closeChar: '',
    });
 
  tempHeight = $("#footer").prev().height();
  makeSticky(); 
  
});



function makeSticky() {
  var footer = $("#footer");
  var preFooter = footer.prev();
  var winH = $(window).height();

  var missing = winH - (footer.offset().top + footer.height());

  if ( missing >= 0 ) {
    // page is smaller than window
    preFooter.css("min-height", preFooter.height() + missing - 46)

  } else {
    preFooter.css("min-height", tempHeight)
  } 
}
