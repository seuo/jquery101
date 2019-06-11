$(function(){

    // masking
    $('#income').mask('000,000,000,000,000.00', {reverse:true});

    // formValidation
    $('#signup').validate({
        rules:{
            username:{
                required:true,
                minlength:3
             },
            password:{
                required:true,
                minlength:5
            },
            password_confirmation:{
                equalTo:'#password',

            },
            email:{
                required:true,
                email:true,
            },
            other:{
                required:'ethnicity_other:checked',
                minLength:2,
            },
            agree:'required',
         },
        messages:{
            username:{
                required:'Please fill in your username',
                minlength:'Min of 3 characters'
            },
            password:{
                required:'Please fill in your password',
                minlength:'Min of 5 characters'
            },
            agree:'',
            email:{
                required:'Please fill in your email',
            }

         },
         highlight:function(el){
             $(el).addClass('animated shake');
             $(el).one('animationend',function(){
                 $(this).removeClass('animated shake');
                });
         },
    });
});
