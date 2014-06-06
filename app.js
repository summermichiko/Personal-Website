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

    if ($(".item img").css("width") === "375px") { //largest screen
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
    };

    if ($(".item img").css("width") === "290px") { //smallest screen
        var headerTop = $('header').offset().top;
        var headerBottom = headerTop + 450; // Sub-menu should appear after this distance from top.
        $(window).scroll(function () {
            var scrollTop = ($(window).scrollTop()); // Current vertical scroll position from the top
            if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
                $(".menuBar").fadeIn();
            } else {
                $(".menuBar").fadeOut();
            }
        });
    };

    $(".menuBar img").on("click", function() {
        console.log("test");
        $(".dropDown").show();
    });

});