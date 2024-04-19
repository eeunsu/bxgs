$(function () {
    $('.artist_list li').on('click', function () {
        let idx = $(this).index();
        let sort_depth = $(this).closest('.artist_list').find('.sort_depth').eq(idx);
        $(this).addClass('on').siblings().removeClass('on');
        sort_depth.toggleClass('on').siblings('.sort_depth').removeClass('on');
    });
});
