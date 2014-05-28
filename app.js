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
    if ($(".laptop img").css("width") === "295px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 415; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($(".laptop img").css("width") === "345px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 420; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($(".laptop img").css("width") === "350px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 335; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };
    if ($(".laptop img").css("width") === "335px") {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 650; // Sub-menu should appear after this distance from top.
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