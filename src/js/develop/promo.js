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

var canvas1, stage1, exportRoot1;

function init1() {
    canvas1 = document.getElementById("canvas1");
    exportRoot1 = new lib1.logo_index();

    stage1 = new createjs.Stage(canvas1);
    stage1.addChild(exportRoot1);
    stage1.update();

    createjs.Ticker.setFPS(lib1.properties.fps);
    createjs.Ticker.addEventListener("tick", stage1);
}




$(document).ready(function(){
    butter();
});

$(window).load(function(){
    init1();

    $('body').attr('style','opacity:1');
});

$(window).resize(function(){
    if($('.sendwich-icon').css('display') == 'none'){
        $('.menu').removeAttr('style');
        $('.sendwich-icon').removeClass('active');
    }
});