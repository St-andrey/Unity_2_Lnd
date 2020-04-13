$(function () {

    // SERVICES SECTION SLIDERS 
    $('.services__text-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        asNavFor: '.services__img-slider',
    })

    $('.services__img-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        //!!! right-to-left
        asNavFor: '.services__text-slider',

    })

    //ABOUT SECTION SLIDERS

    $('.about__main-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        
        infinite: true,
        asNavFor: '.about__controls-slider',
        
    })

    $('.about__controls-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        vertical: true,
        draggable: true,
        centerMode: true,
        infinite: true,
        asNavFor: '.about__main-slider',

        // prevArrow: ('.about__controls-slider--arrow--up'),
        // nextArrow: ('.about__controls-slider--arrow--down'),

    })

});

