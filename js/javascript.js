/* Book Leaf Suggestion Page Click Me */

$(document).ready(function(){
	$("input.bookleaf").click(function(){
	$("#text").fadeToggle("slow");
   	 	});
	});
	
/* Show More Menu Page Button Left */
	
$(document).ready(function(){
    $("button.button1").click(function(){
        $("div.animated1").animate({
            top: '26vh',
            left: '54vh',
            opacity: '0.5',
            height: '30vh',
            width: '45%'
        });
    });
});

/* Show More Menu Page Button Right */

$(document).ready(function(){
    $("button.button2").click(function(){
        $("div.animated2").animate({
            top: '56vh',
            left: '54vh',
            opacity: '0.5',
            height: '30vh',
            width: '45%'
        });
    });
});
