$(document).ready(function () {
    // Show/hide mobile menu
    function mobileViewUpdate() {
        let $viewportWidth = $(window).width();
        if ($viewportWidth < 1050) {
            $('.main-menu').addClass('mobile-menu');
        } else {
            $('.main-menu').removeClass('mobile-menu');
        }
    }

    mobileViewUpdate();

    $(window).resize(function () {
        mobileViewUpdate();
    });

    // Smooth scroll
    $('.menubtn').on('click', function () {
        $(this).toggleClass('opened');
        $('.main-menu').toggleClass('opened');
    });
    $('.main-menu.mobile-menu a').click(function () {
        $('.main-menu.mobile-menu, .menubtn').removeClass('opened');
    });

    // Autohide navbar
    $('.navbar').autoHidingNavbar();

    // Animate scroll
    $('.scrollto').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    AOS.init({
        duration: 1500
    });
});
