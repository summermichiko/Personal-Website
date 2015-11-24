$(document).ready(function() {
    $(function() {
    	$(".navscroll").bind('click', function(event){
    		event.preventDefault();
        	var anchor = $(this);
        	$('html, body').stop().animate({
            	scrollTop: $(anchor.attr('href')).offset().top -55
        	}, 700);
    	});
	});

    $(".menuBar img").on("click", function() {
        $(".responsiveDropDown").toggle();
    });

    $(".responsiveDropDown a").on("click", function() {
        $(".responsiveDropDown").hide();
    });

    /*if ($(".menuBar").css("display") === "none") { //smallest screen
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 450; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".dropDown").fadeIn();
            } else {
                $(".dropDown").fadeOut();
            }
        });
    };*/

});