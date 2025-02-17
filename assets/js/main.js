(function($) {
  "use strict";


  $(document).on("scroll", function(){

    if ($(document).scrollTop() > 100){
      $(".header-area").addClass("shrink");
    } else {
      $(".header-area").removeClass("shrink");
    }
    
  });
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overflow-hidden');   
  }); 





  // owlCarousel
  $(function() {
    var owl = $('.owl-carousel'),

        owlOptions = {
          loop: false,
			    margin: 30,
			    smartSpeed: 700,
			    nav: true,
			    items: 1
        };

    if ( $(window).width() < 767 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 767 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});




 
})(jQuery);
