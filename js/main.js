$(function () {
    $('.design__slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="arrow arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="arrow arrow-right">',
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    infinite: true,
                    dots: true
                }
            },
        ]
    })
});