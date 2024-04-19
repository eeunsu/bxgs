/* totalNav */
 $(function() {
    
    $('.btnNav').on('click', function() {
        $('.dim, .totalNav').fadeIn('on')
    })
})
$(function() {
    $('.close, .dim').on('click', function() {
        $('.dim, .totalNav').fadeOut('on')
    })
}) 