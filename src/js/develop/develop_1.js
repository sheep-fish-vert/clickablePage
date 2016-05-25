function butter(){
    $('.sendwich-icon').click(function() {
       $(this).toggleClass('active');
       if($(this).hasClass('active')){
            $('.menu').stop().slideDown();
       }else{
             $('.menu').stop().slideUp();
       }
    });
}


$(document).ready(function(){
    butter();
});

$(window).load(function(){

});

$(window).resize(function(){
    if($('.sendwich-icon').css('display') == 'none'){
        $('.menu').removeAttr('style');
        $('.sendwich-icon').removeClass('active');
    }
});