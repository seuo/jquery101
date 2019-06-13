$(function(){

    anime({
        targets: '.section1 .cls-1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true,
      });

      

    // var anime1 = anime({
    //     targets:'.section2 label',
    //     translateX: ['-50vw',0],
    //     opacity: [0,1],
    //     delay: anime.stagger(300), // anime.stagger() or function(el,i) {return i*300}
    // });

    // var anime2 = anime ({
    //     targets:'.section2 input',
    //     translateX: ['50vw',0],
    //     opacity: [0,1],
    //     backgroundColor:['#fff','#333'],
    //     color:['#ff0','#fff'],
    // })

    // var anime3 = anime ({
    //     targets:'.section2 .btn-primary',
    //     scale:[2,1],
    //     opacity: [0,1],
    // })

    var tl = anime.timeline({

        duration:3000,
        easing:'easeInOutQuart',
        autoplay:false,

    });

    tl.add({
        targets:'.section2 label',
        translateX: ['-50vw',0],
        opacity: [0,1],
        delay: anime.stagger(300),
    });

    tl.add({
        targets:'.section2 input',
        translateX: ['50vw',0],
        opacity: [0,1],
        backgroundColor:['#fff','#333'],
        color:['#ff0','#fff'],
    },0);

    tl.add({
        targets:'.section2 .btn-primary',
        scale:[2,1],
        opacity: [0,1],
    });

    // tl.seek(tl.duration*.5);

    // console.log(tl.duration);

    var s2 = $('.section2').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var progress = ((scrollTop-s2+1000)/500);
                        
                        // s2:reference point // 300:earlier or later.. how far into section to before starting // )/500:animation time
                        // scrollTop - s2 (0 from top of section 2) +500 (how far into section 2) /500 ( timeline of animation 500px)

        tl.seek(tl.duration * progress);

        // if (scrollTop >= s2 - 300) {
        //     anime1.play();
        //     anime2.play();
        //     anime3.play();
        // }


    });
});


