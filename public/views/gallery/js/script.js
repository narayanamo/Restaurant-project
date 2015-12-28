$(document).ready(function() {
    //mouseenter//
    $('ul#gallery li ').on('mouseenter', function() {
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        var price = $(this).children().data('price');

    
    
    //create overlay div//
    $(this).append('<div class="overlay"></div>');
    //get the overlay div//
    var overlay = $(this).children('.overlay');
    //add html to overlay// 
    overlay.html('<h3> '+title+' <h3><p> '+desc+' </p><p> '+price+' </p>');
    //fade-in overlay//
    overlay.fadeIn(800);
    });
    
    
    //mouseleave overlay//
    $('ul#gallery li ') .on('mouseleave',function(){
         //create overlay div//
    $(this).append('<div class="overlay"></div>');
    //get the overlay div//
    var overlay = $(this).children('.overlay');
        //fade it out//
        overlay.fadeOut(500);
        
    });
    
    
    
});

