$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if(direction== "down") {
            $('nav').addClass('sticky') 
        }
        else {
            $('nav').removeClass('sticky')
        }
        
        
});


/* scroll button*/
$('.js--scroll-to-gallery').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top},1000);
});
    
    $('.js--scroll-to-menu').click(function() {
    $('html, body').animate({scrollTop: $('.view').offset().top},1000);
});
    
});
    





   /*map */
new GMaps({
  div: '.map',
  lat: -12.043333,
  lng: -77.028333
});
                  
