$(document).ready(function(){
    "use strict";

    console.log("Ready");

    // Handle the slider next click
    $('.slider-nav .next').on('click', function() {
        var sliderNav = $(this);
        var activeSlide = $('.slide-item.is-active');
        
        // Clear prev state
        $('.slider-nav .prev').removeClass('is-disabled');

        $(activeSlide).removeClass('is-active');
        $(activeSlide).next().addClass('is-active');

        if ($(activeSlide).next().is(':last-child')) {
            $(sliderNav).addClass('is-disabled');
        }
    });

    // Handle the previous click
    $('.slider-nav .prev').on('click', function() {
        var sliderNav = $(this);
        var activeSlide = $('.slide-item.is-active');

        // Clear next state
        $('.slider-nav .next').removeClass('is-disabled');

        $(activeSlide).removeClass('is-active');
        $(activeSlide).prev().addClass('is-active');

        if ($(activeSlide).prev().is(':first-child')) {
            $(sliderNav).addClass('is-disabled');
        }
    });

    // $('.slide-toggle').click(function(){
    //     if ($(this).text("Stop")) {
    //         $(autoSlide).pause()
    //     }
    // });

    function autoSlide(){
        setTimeout(() => {
            $('.slider-nav .next').click();
        }, 3000);
    }
    
});