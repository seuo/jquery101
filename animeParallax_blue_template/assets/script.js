$(function(){

    var tl = anime.timeline({
        easing: 'linear',
        autoplay: false,
    })

    .add({
        targets:'.section1 .layer',
        translateY:function(el,i,l){
            return[i*10,0];
        },
        // translateZ:function(el,i,l){
        //     return[(i-l)*100,0];
        // },

    })

    .add({
        targets:'.section .viewport',
        translateY:[0,'100vh'],
        duration:1000,
    },0)

    var screenHeight = $(window).height();
    // var s1 = ('.section1').offset().top;
    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop)/screenHeight;
        tl.seek(tl.duration*progress);
    });

});
 





