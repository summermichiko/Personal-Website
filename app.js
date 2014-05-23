$(document).ready(function() {
    var headerTop = $('header').offset().top;
    var headerBottom = headerTop + 630; // Sub-menu should appear after this distance from top.
    $(window).scroll(function () {
        var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
        if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
          	$(".menuBar").fadeIn();
        } else {
         	$(".menuBar").fadeOut();
        }
    });

    $(function() {
    	$("#first_li a").bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top -110
        	}, 700);
    	});
	});

	$(function() {
    	$(".menuBar a").bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top -110
        	}, 700);
    	});
	});

	$(function() {
    	$("#thirdLine a").bind('click',function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top -110
        	}, 700);
    	});
	});

});