$(function(){

    // 1. plan & animate your scenes in autoplay
  

    var tl = anime.timeline({
        easing:'linear',
        autoplay:false,
    })

    .add({
        targets:'.section2 .layer2',
        translateX:['100vw',0]
    },1000)

    .add({
        targets:'.section2 .layer3',
        translateX:['-100vw',0]
    },3000)

    .add({
        targets:'.section2 .layer4',
        translateY:['-100vh',0]
    },5000)

    .add({
        targets:'.section2 .layer5',
        translateX:['100vw',0]
    },7000)

    .add({
        targets:'.section2 .layer6',
        translateX:['-100vw',0],
        translateY:['-100vh',0]
    },9000)

    // step 3

    .add({
        targets:'.section2 .viewport',
        translateY:[0,'500vh'],
        duration:10000,
    
    },0)

    var screenHeight = $(window).height();
    var s2 = $('.section2').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var progress = (scrollTop-s2)/(screenHeight*5);

        tl.seek(tl.duration*progress);


    })

    // console.log(tl.duration)

    // 2. determine the scroll length (scroll duration) to unfold animation
            // by extending section height

    // 3. add translateY to move viewport along with your scrolling.

    // 4. map timelines to scroll length
});
























