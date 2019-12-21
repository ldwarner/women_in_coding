$(document).ready(function(){

var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

	var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger_1", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
					duration: "700px" // duration of the scrollmagic effects
				})
				.setPin("#pin_1") // fixes the video to the screen
			  	.addTo(controller); // adds all effects mentioned above to the scrollmagic controller

var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger_2", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
					duration: "700px" // duration of the scrollmagic effects
				})
				.setPin("#pin_2") // fixes the video to the screen
			  	.addTo(controller); // adds all effects mentioned above to the scrollmagic controller

			  	var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger_3", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
					duration: "700px" // duration of the scrollmagic effects
				})
				.setPin("#pin_3") // fixes the video to the screen
			  	.addTo(controller); // adds all effects mentioned above to the scrollmagic controller

});

$(document).ready(function(){

$(".home").click(function(){
	$('body,html').animate({scrollTop: 0}, 900)
});

});


 $(window).scroll( function(){
        $('.info_1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 

        $('.info_2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 

        $('.info_3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 

        $('.info_4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 

    });