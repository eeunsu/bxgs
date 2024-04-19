/* main_slide*/
$(document).ready(function () {
    $('.main_bg').slick({
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
})

/* best_art */
$('.best_list').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    cssEase: 'linear',
    slidesToScroll: 1
});
/* new_art */
$('.new_list').slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    cssEase: 'linear',
    slidesToScroll: 1
});
/* review */
$('.review_list').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    cssEase: 'linear',
    slidesToScroll: 1
});

/* md_pick */
$(function () {
    let tab = $('.pick_tap li')
    tab.on('click', function () {
        let idx = $(this).index()
        let tab_cont = $(this).parents('.pick_tap').siblings('.tab_content').eq(idx);
        $(this).addClass('on');
        $(this).siblings().removeClass('on')
        tab_cont.addClass('on')
        tab_cont.siblings().removeClass('on')
    })
})


