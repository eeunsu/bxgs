/* totalNav */
 $(function() {
    
    $('.btnNav').on('click', function() {
        $('.totalNav').fadeIn('on')
    })
})
$(function() {
    $('.close').on('click', function() {
        $('.totalNav').fadeOut('on')
    })
}) 

$(function(){
    $('.megaMenu > li').on('click', function(){
        $(this).next('.depth').stop().slideToggle(600);
        $(this).toggleClass('on').siblings().removeClass('on')
        $(this).next('.depth').siblings('.depth').stop().slideUp(600)
    })
})
