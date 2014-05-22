	$(document).ready(function() {
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 600; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
            	$(".menuBar").fadeIn();
            } else {
            	$(".menuBar").fadeOut();
            }
        });
    });