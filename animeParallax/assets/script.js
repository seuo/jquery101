$(function(){

    var anime1 = anime({
        targets:'.section1 .layer',
        translateY: function(layer,i,l){
            return (l-i)*50;
        },
        easing:'linear',
        // duration:2000,
        autoplay:false,

    });

    var anime2 = anime({
        targets:'.layer2 h1',
        scale:[2,1],
        opacity:[0,1],
        easing:'linear',
        autoplay:false,
    });

    $(document).on('scroll',function(){

        var scrollTop = $(document).scrollTop();
        var progress = scrollTop/500;
        anime1.seek(anime1.duration*progress);

        var progress2 =scrollTop/300;
        anime2.seek(anime2.duration*progress2);

    });

});
 





