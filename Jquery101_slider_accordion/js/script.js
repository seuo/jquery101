$(
    function(){

    var isOpen = 'false';

        $('#slide-button').on('click',function(){

                if(isOpen == 'false') {
                    $('header').animate({left:'0em'},1000,function(){

                        $('#slide-button .fa').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
                    });
                     // update state
                    isOpen = 'true';
                }else {
                    $('header').animate({left:'-17em'},1000,function(){

                        $('#slide-button .fa').removeClass('fa-arrow-circle-left').addClass('fa-arrow-circle-right');
  
                    });
                    // update state
                    isOpen = 'false';
                }
       });
    });