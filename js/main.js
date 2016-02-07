var AA = (function ($, module) {

    var menuIcon = $('.menu-icon'),
        nav = $('nav'),
        navLink = $('nav ul li a'),
        allPages = $('.page');

    registerEvents();

    function registerEvents () {

        menuIcon.click(function (e) {
            e.preventDefault();
            toggleNavigation();
        });

        navLink.click(function (e) {
            e.preventDefault();
            loadPage($(this).attr('href'));
            toggleNavigation();
        });

    }

    function toggleNavigation () {
        if( !menuIcon.hasClass('open') ) {
            openNavigation(); 
        } else {
            closeNavigation();
        }
    }

    function openNavigation () {
        menuIcon.addClass('open');
        nav
            .css({display: 'block'})
            .delay(50)
            .queue(function (next) {
                nav.addClass('open');
                next();
            });
    }

    function closeNavigation () {
        menuIcon.removeClass('open');
        nav
            .removeClass('open')
            .delay(500)
            .queue(function (next) {
                nav.css({display: 'none'});
                next();
            });
    }

    function loadPage (page) {
        hideActivePage();
        $(page).addClass('loaded');
    }

    function hideActivePage (page) {
        allPages.each(function () {
            if ( $(this).hasClass('loaded') ) {
                $(this).removeClass('loaded');
            }
        });
    }

    return module;

})(jQuery, AA || {});