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
    if ($("#portfolio img").css("width") === "295px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 425; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($("#portfolio img").css("width") === "345px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 645; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($("#portfolio img").css("width") === "350px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 440; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($("#portfolio img").css("width") === "351px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 610; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($("#portfolio img").css("width") === "352px") {
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
    };
  
   
   


});