var AA = (function ($, module) {

    var menuIcon = $('.menu-icon'),
        wrapper = $('.wrapper');

    registerEvents();

    function registerEvents () {

        menuIcon.click(function (e) {
            e.preventDefault();
            toggleNavigation( $(this) );
        });

    }

    function toggleNavigation ( btn ) {
        if( !btn.hasClass('open') ) {
            btn.addClass('open');
            wrapper.addClass('open');
        } else {
            btn.removeClass('open');
            wrapper.removeClass('open');
        }
    }

    return module;

})(jQuery, AA || {});