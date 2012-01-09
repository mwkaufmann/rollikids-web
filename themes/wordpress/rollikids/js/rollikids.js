/* Helper functions for the rollikids.eu website */

var tempHeight = 0;
var backgroundImages = 0;
$(document).ready(function(){
  
  $('#rolliheader .pictures').cycle({
	  fx: 'fade',
	  timeout: 10000,
	  speed: 2000
  });
  
  // call sticky function on resize
  $(window).resize(function() {
	  makeSticky();
  });
  
  /*
  $('.secondlink').bind('mouseover', function(){
	  $(this).switchClass('secondlink', 'secondlinkHover', 500);
  }).bind('mouseout', function(){
	  $(this).switchClass('secondlinkHover', 'secondlink', 200);
  });
  
  $('#menu-wrapper .link').bind('mouseover', function(){
	 $(this).switchClass('link', 'linkSelected', 200); 
  }).bind('mouseout', function(){
	  $(this).switchClass('linkSelected', 'link', 10);
  });
  
  $("#linkScroller").containedStickyScroll({
	  duration: 300,
	  closeChar: '',
  });
 
  */

  tempHeight = $("footer").prev().height();
  makeSticky(); 
  
});



function makeSticky() {
  var footer = $("footer");
  var preFooter = footer.prev();
  var winH = $(window).height();

  var missing = winH - (footer.offset().top + footer.height());

  if ( missing >= 0 ) {
    // page is smaller than window
    preFooter.css("min-height", preFooter.height() + missing - 146)

  } else {
    preFooter.css("min-height", tempHeight)
  } 
}
