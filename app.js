$(document).ready(function() {
    $(function() {
    	$(".navscroll").bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top -85
        	}, 700);
    	});
	});
    if ($("#topLine").css("width") === "74.5%") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 550; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    
  
   
   


});