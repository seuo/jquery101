$(function(){
    $('[data-target]').on('click',function(){

        var sLayer = $(this).data('target');
        $(sLayer).addClass('current');
    });

    $('[data-dismiss]').on('click',function(){

        var sLayer = $(this).data('dismiss');
        $(sLayer).removeClass('current');
    });
});