$(document).ready(function(){
    $(".tabList__item:first").addClass('active');
    $(".tab:first").show();
    $(".tab:not(:first)").hide();

    $('.tabList__item').click(function(){
        $('.active').removeClass('active');

        $(this).addClass('active');

        var number = $('.tabList__item').index($(this));
        $('.tab').not('[style="display: none"]').hide();
        $('.tab').eq(number).show();
        return false;
    });

    $('.help__text').hide();
    $('.btn').click(function(){
        $('.help__text').show();
    });
    $('.form-control').hover(function() {
        $(this).next('span').stop().animate({opacity: 'show', left: '340'}, 'slow');
    }, function() {
        $(this).next('span').stop().animate({opacity: 'hide', left: '370'}, 'slow');
    });

    $('.form-control').keydown(function( event ) {
        if ( event.which == 9 ) {
            $('.form-control').focusin(function(){
                $(this).next('span').stop().animate({opacity: 'show', left: '340'}, 'slow');
            });
            $('.form-control').focusout(function(){
                $(this).next('span').stop().animate({opacity: 'hide', left: '370'}, 'slow');
            });
        }
    });

});