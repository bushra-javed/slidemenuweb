$(document).ready(function () {

    //scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup1').fadeIn();
        } else {
            $('.scrollup1').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //jQuery for page scrolling feature - requires jQuery Easing plugin

    $(function () {
        $('.navbar-nav li a').bind('click', function (event) {
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    // animate team part11 profile design
    "use strict";
    $(".team-part11-row-work a").hover(function () {
        $(this).find(".team-part11-img-active").fadeIn();
        $(this).find("h3").fadeOut();


    }, function () {

        $(this).find(".team-part11-img-active").fadeOut();
        $(this).find("h3").fadeIn();
        });





    //FAQ
    $(".up-arrow").hide();
 $('.team-part10-answer').hide();
    $('.team-part10-faq h4').click(function () {
        //alert($(this).find('.angle-down'));
        $(this).find('.down-arrow').toggle();
        $(this).find('.up-arrow').toggle();
        $(this).next('.team-part10-answer').slideToggle();
        //$(this).find('.angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');

 });
    //$(this).parent().find('.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up')
    $('.team-part10-faq h4').addClass("team-part10-faq-question");
    // FAQS

   



// loading data by ajax star
    $('#team-part13-ajax').click(function () {
        $('.team-part13-ajax-placeholder').load("bootstrap_kudvenkat-part2.html .body-text")
        return false;
    });
// loading data by ajax end
        

});