$(document).ready(function(){
    $('.banners').slick({
        autoplay: true,
        pauseOnHover: false,
        fade: true,
        autoplaySpeed: 5000,
    }); 

    $('.depoiments-slider').slick();

    $('.statistics-item spam').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
    
    $('.event-header').click( function(){
         if ( $(this).parent().hasClass('active') ) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.event-content').slideUp();
         } else {
            $('.event-item').removeClass('active');
            $('.event-content').slideUp();
            $(this).parent().find('.event-content').slideDown();
            $(this).parent().addClass('active');
         }
    } )
    
});


