$(function(){
    //-------- slider
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
    //-------- accordian



    // $('#accordion p').hide();
    //    $('#accordion h2').on('click',function(){
    //        var sState = $(this.data('state');

    //         if (sState == 'close') {
    //             $(this).next().slideDown(function(){
    //                 $(this).prev().find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
    //                 //update state
    //             });
    //                 $(this).data('state','open');
    //         }
    //         else {
    //             $(this).next().slideUp(function(){
    //                 $(this).prev().find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
    //             });
    //             $(this).data('state','close');
    //             }


    //     });




    