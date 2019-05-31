$(function(){
    //stickyMenu

    var  menuOffset = $('.pure-menu-horizontal').offset().top;

    $(document).on('scroll',function(){
      var scrollTop = $(document).scrollTop();
        if (scrollTop >= menuOffset) {
            $('.pure-menu-horizontal').addClass('fixed');
        }else {
            $('.pure-menu-horizontal').removeClass('fixed')
        }

        
    });

    // highlighting the menu items
    
        var  offset1 = $('.section1').offset().top;
        var  offset2 = $('.section2').offset().top;
        var  offset3 = $('.section3').offset().top;
        var  offset4 = $('.section4').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= offset1 && scrollTop < offset2 ){
            activeLi = $('ul>li:nth-child(1)');
        }
        if (scrollTop >= offset2 && scrollTop < offset3 ){
            activeLi = $('ul>li:nth-child(2)');
        }
        if (scrollTop >= offset3 && scrollTop < offset4 ){
            activeLi = $('ul>li:nth-child(3)');
        }
        if (scrollTop >= offset4 ){
            activeLi = $('ul>li:nth-child(4)');
        }
        $(activeLi).addClass('active');
        $('ul>li').not(activeLi).removeClass('active');

    });

    //smooth scrolling
    $('[data-to]').on('click',function(e){

        // e represents the event that took place(console log to store)

        e.preventDefault();
        var sSection = $(this).data('to');
        var sectionOffset = $(sSection).offset().top; //1 =  plus more 1px to make sure we are inside the correct section
        // move to a section by scrolling
        $('html,body').animate({scrollTop:sectionOffset},1000);


    });


    $('h1.animated').addClass('invisible');

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();
        // each is a "loop" through
        $('h1.animated').each(function(i,el){
            var headingOffset = $(el).offset().top;


            console.log(i,el)
            if (scrollTop>headingOffset-500){
                $(el).parent().addClass('grow');

                if ($(el).hasClass('invisible') == true){
                    $(el).removeClass('invisible')
                    .addClass('fadeInLeft');

                 $(el).one('animationend',function(){ 
                     $(this).removeClass('fadeInLeft');
                });
            }
        
        }

        if (scrollTop>headingOffset-500){
            $(el).parent().addClass('grow');

            if ($(el).hasClass('invisible') == true){
                $(el).removeClass('invisible')
                .addClass('fadeInLeft');

             $(el).one('animationend',function(){ 
                 $(this).removeClass('fadeInLeft');
            });
        }
    
    }
        
            else{
                $(el).parent().removeClass('grow');

                
                if ($(el).hasClass('invisible')==false) {

                    $(el).addClass('fadeOutRight');

                    $(el).one('animationend',function(){
                        $(this).removeClass('fadeOutRight')
                                .addClass('invisible');
                    });

                }
            }
            
        });

    });




});












    //keyframe animation

    // $(document).on('scroll',function(){
    //     var scrollTop = $(document).scrollTop();
    //     // each is a "loop" through
    //     $('div.animated').each(function(i,el){
    //         var headingOffset = $(el).offset().top;
    //         if (scrollTop>headingOffset-500){
    //             $(el).addClass('elementAnim');
    //         }else{
    //             $(el).removeClass('elementAnim');
    //         }
    //     });

    // });