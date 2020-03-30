$(function () {
    $('.about__main-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        draggable: true,
        infinite: true,
        asNavFor: '.about__controls-slider',
        // prevArrow: ('.about-slider__arrow--top'),
        // nextArrow: ('.about-slider__arrow--down'),

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

