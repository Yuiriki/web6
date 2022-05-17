(function($){

    //아이디
   $('.id-btn').on({
       keyup:function(){
           var idValue=$('.id-btn').val().toString();
           const regExp = /^[A-Za-z\d]{6,10}$/g;
            if(idValue===''){
                $('.id-btn').removeClass('error');
                $('.id-btn').removeClass('success');
                
                
            }else{
                if(regExp.test(idValue)===true){
                $('.id-btn').removeClass('error');
                $('.id-btn').addClass('success');
           }else if(regExp.test(idValue)===false){
                $('.id-btn').removeClass('success');
                $('.id-btn').addClass('error');
                
           } 
            }
            
          
       }
   });

   //아이디 중복확인
   $('#idBtn').on({
    click:function(e){
        e.preventDefault();
        if($('.id-btn').val().toString()===''){
          alert('아이디를 입력하세요!');  
        }
    }
});

   //비밀번호
   $('#pwBtn').on({
    keyup:function(){
        var pwValue=$(this).val().toString();
        const regExp=/^(?=.*[a-zA-Z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g; 

        
        if(pwValue===''){
         $('.pw-btn').removeClass('error');
         $('.pw-btn').removeClass('success');
         
         }else{
             if(regExp.test(pwValue)===true){
                 $('.pw-btn').removeClass('error');
                 $('.pw-btn').addClass('success');
             }else {
                 $('.pw-btn').removeClass('success');
                 $('.pw-btn').addClass('error');            
             } 
         }   

        
     }
});


           
    //비밀번호 확인
   $('#pwBtnCon').on({
    keyup:function(){
        var pwValue=$(this).val().toString();
        const regExp=/^(?=.*[a-zA-Z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g;
        

        if(pwValue===''){
         $('.pw-btn-confirm').removeClass('error');
         $('.pw-btn-confirm').removeClass('success');
         
         }else{
             if(regExp.test(pwValue)===true){
                 $('.pw-btn-confirm').removeClass('error');
                 $('.pw-btn-confirm').addClass('success');
             }else{
                 $('.pw-btn-confirm').removeClass('success');
                 $('.pw-btn-confirm').addClass('error');            
             } 
         }   

        
    }

     
});

//비밀번호 분실 질문 선택

$('#selPwQ').on({
    change:function(){
        if($('.self-input').is(':checked')){
            $('#directInput').show();
        }else{
            $('#directInput').hide();
        }
    }
});

//휴대폰번호
$('#phoneNum').on({
    keyup:function(){
        var phoneValue=$(this).val().toString();
        const regExp= /^01[0|1|6|8|9]+\d{3,4}\d{4}$/g;
        var regExp1=/[^0-9]/g;
        
        $(this).val(phoneValue.replace(regExp1, ''));      
         

        if(phoneValue===''){
         $('.phone').removeClass('error');
         $('.phone').removeClass('success');
         
         }else{
             if(regExp.test(phoneValue)===true){
                 $('.phone').removeClass('error');
                 $('.phone').addClass('success');
             }else if(regExp.test(phoneValue)===false){
                 $('.phone').removeClass('success');
                 $('.phone').addClass('error');            
             } 
         }   
    }
});

//팩스번호
$('#faxNum').on({
    keyup:function(){
        var faxValue=$(this).val().toString();
        const regExp= /^0[2|51|53|32|62|42|52|44|31|33|43|41|63|61|54|55|64]+\d{3,4}\d{4}$/g;
        var regExp1=/[^0-9]/g;
        
        $(this).val(faxValue.replace(regExp1, ''));

        if(faxValue===''){
         $('.fax').removeClass('error');
         $('.fax').removeClass('success');
         
         }else{
             if(regExp.test(faxValue)===true){
                 $('.fax').removeClass('error');
                 $('.fax').addClass('success');
             }else if(regExp.test(faxValue)===false){
                 $('.fax').removeClass('success');
                 $('.fax').addClass('error');            
             } 
         }   
    }
});

//이메일
$('.email-id').on({
    keyup:function(){
        var emailValue1=$('.email-id').val().toString();
        
       const regExp1=/^.*[A-Za-z0-9\.-_]$/;
        
        console.log(regExp1.test(emailValue1));
        if(emailValue1===''){
            $('.email-id').removeClass('error');
            $('.email-id').removeClass('success');
            
            }else{
                if(regExp1.test(emailValue1)===true){
                    $('.email-id').removeClass('error');
                    $('.email-id').addClass('success');
                }else if(regExp1.test(emailValue1)===false){
                    $('.email-id').removeClass('success');
                    $('.email-id').addClass('error');            
                } 
        }   
           
    }
});

//이메일 도메인
$('.email-domain').on({
    keyup:function(){
        var emailValue2=$('.email-domain').val().toString();
        const regExp2=/^.*[a-z0-9]+\.+[a-z]{2,4}$/g;
        if(emailValue2===''){
            $('.email-domain').removeClass('error');
            $('.email-domain').removeClass('success');
            
            }else{
                if(regExp2.test(emailValue2)===true){
                    $('.email-domain').removeClass('error');
                    $('.email-domain').addClass('success');
                }else if(regExp2.test(emailValue2)===false){
                    $('.email-domain').removeClass('success');
                    $('.email-domain').addClass('error');            
                } 
        }
    }
});

//이메일 도메인 선택
    $('#emailDomainSel').on({
        change:function(){     
            if($('.first-selected').is(':checked')){
                $('#emailDomain').removeClass('selected');
                $('#emailDomain').val($(this).val()).prop('disabled',false);
            }else{
                $('#emailDomain').addClass('selected');
                $('#emailDomain').val($(this).val()).prop('disabled',true);
            }
        }
    });






})(jQuery);