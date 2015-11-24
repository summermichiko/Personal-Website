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

	$(".nameHeader").on("click", function(e) {
		e.preventDefault();
		var anchor = $(this);
    	$('html, body').stop().animate({
        	scrollTop: $(anchor.attr('href')).offset().top
    	}, 700);
	});

    $(".menuBar img").on("click", function() {
        $(".responsiveDropDown").toggle();
    });

    $(".responsiveDropDown a").on("click", function() {
        $(".responsiveDropDown").hide();
    });

});