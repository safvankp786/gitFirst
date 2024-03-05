jQuery(function(){

    var $owl = $('.nav-slider').owlCarousel({
        loop: false,
        margin:17,
        autoWidth:true,
        nav: true,
        dots: false,
        responsive : {
          761 : {
            nav: true,
            dots: false
          },
          319 : {
            nav: false,
            dots: true
          }
        }
    });
    jQuery(".menu-toggle").on('click', function(){
        jQuery(this).toggleClass("active");
        if(jQuery(this).hasClass("active")){
        jQuery(this).closest('.main-header').addClass('active');
         jQuery('.nav-wrapper').addClass('showNav'); 
        }else{
          jQuery('.nav-wrapper').removeClass('showNav'); 
          jQuery(this).closest('.main-header').removeClass('active');
        }
    });
    
      function navWidth(){
        var getLeftPosition = jQuery('.menu-toggle').offset().left;
        jQuery('.nav-center').css('max-width', 'calc(100% - '+getLeftPosition+'px)').css('left', getLeftPosition);
        $owl.trigger('refresh.owl.carousel');
      }
    
    navWidth();

    jQuery(window).on('resize', function(){
    navWidth();
    });
});