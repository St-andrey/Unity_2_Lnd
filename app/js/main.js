$(function () {

    // SERVICES SECTION SLIDERS 
    $('.services__text-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        // vertical: true,//?????
        asNavFor: '.services__img-slider',

        // prevArrow: ('.about__controls-slider--arrow--up'),
        // nextArrow: ('.about__controls-slider--arrow--down'),

    })

    $('.services__img-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        //!!! right-to-left
        // vertical: true,//?????
        asNavFor: '.services__text-slider',

        prevArrow: ('.services__img-slider--arrow-left'),
        nextArrow: ('.services__img-slider--arrow-right'),

    })

    //ABOUT SECTION SLIDERS

    $('.about__main-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        draggable: true,
        infinite: true,
        asNavFor: '.about__controls-slider',
        
    })

    $('.about__controls-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        vertical: true,
        centerMode: true,
        infinite: true,
        asNavFor: '.about__main-slider',

        // prevArrow: ('.about__controls-slider--arrow--up'),
        // nextArrow: ('.about__controls-slider--arrow--down'),

    })

});

