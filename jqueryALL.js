$(document).ready(function () {
    //$.get("navigation-bar.html", function (data) {
    //    $("#nav-placeholder").replaceWith(data);
    //});
    //$.get("footer.html", function (data) {
    //    $("#footer-place-holder").replaceWith(data);
    //});
    //$.get("social-media.html", function (data) {
    //    $("#social-media-place-holder").replaceWith(data);
    //});
    //// card more button hide and show text
    $('.more1-body').css('color', 'blue').hide();
    $('.more1').on('click', function () {
        $(this).prev().toggle();
    });
    // card text show and hide button  end

    //$('.more1').on('mouseleave', function () {
    //    $('.more1-body').toggleClass('displayhide').slideUp();
    //});

    //$('.team-part8-detail-1').css('border', '1px solid red');

    $('.team-part8-detail-1').each(function () {

        $(this).on('mouseenter', function () {
            $(this).find('.text-div1').fadeIn();
            //css('border', '1px solid red');
            //$('.img-div1').css('border', '1px solid red');

        });
    });
    $('.team-part8-detail-1').each(function () {
        $(this).on('mouseleave', function () {
            $(this).find('.text-div1').fadeOut();
            //css('border', '1px solid red');
            //$('.img-div1').css('border', '1px solid red');
        });
    });
    $('#faq-collapse').click(function () {
        $('.team-part10-answer').hide();
    });
    $('#faq-expand').click(function () {
        $('.team-part10-answer').show();
    });


    // adding close button dynamically
    $('.message-ui').append('<button  type="button" class="btn btn-danger close-button"> close</button>');
    $('.message-ui').hide();
    $('.more-button').click(function () {
        //$(this).parents('.message-ui').hide();
        $(this).parent().next('.message-ui').show();
    });


    //click the close button and close its d\paent div
    $('.close-ui').click(function () {
        //$(this).parents('.message-ui').hide();
        $(this).parents('.message-ui').fadeOut();
    });
    // hiding div by dynamically created button
    $('.close-button').click(function () {
        $(this).parents('.message-ui').fadeOut();
    });


    //$('.scrollup').click(function () {
    //    $("html, body").animate({ scrollTop: 0 }, "slow");
    //    return false;
    //});
    //$('#team-part8-detail-1').on('mouseenter', function () {
    //    $('.team-part8-header').css(
    //        'border', '1px solid white',
    //    'transition', 'all 500ms ease'
    //        );
    //     $(function(){
    //      $("#nav-placeholder").load("navigation-bar.html");
    //      });
});

