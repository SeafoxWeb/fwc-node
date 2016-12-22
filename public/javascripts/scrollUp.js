$(document).ready(function() {
    //Display/Hide button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        }
        else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click button to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});