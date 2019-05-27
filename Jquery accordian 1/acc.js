$(function(){

    var isOpen = 'false';

        $('#burger').on('click',function(){

            if (isOpen =='false') {
                $('ul').show().animate({width:'40em'},500,function(){
                });
                    isOpen = 'true';
            }
            else {
                $('ul').animate({width:'0em'},500,function(){

                });
                    isOpen = 'false';
            }
    });

});

    // $('.burger ul').hide();
    //     $('.burger').on('click',function(){
    //         var navState = $(this.data('state'));

    //         if (navState == 'close') {
    //             $(this).next().slideDown(function() {

    //          });
    //             $(this).data('state','open');
    //         }
    //         else {
    //             $(this).next().slideUp(function() {

    //         });
    //             $(this).data('state','open');
    //         }

            
    //     });

    // });