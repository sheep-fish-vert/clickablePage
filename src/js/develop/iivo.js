function butter(){
    $('.sendwich-icon').click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.nav').stop().slideDown();
        }else{
            $('.nav').stop().slideUp();
        }
    });
}
/*function changeViewport(){
 $(window).resize(function(){
 whatViewport();
 });
 function whatViewport(){
 var windowWidth = screen.width;
 var viewport = $("meta[name=viewport]");
 viewport.attr('content', 'width=device-width');
 if(windowWidth<=640){
 viewport.attr('content', 'width=640');
 }
 };

 }*/

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



function initVideoJs() {


    var adsSetupPlugin = function molVastSetup(opts) {
        var player = this;
        var options = this.options_||{};
        for(i in opts) {
            options[i] = opts[i];
        }
        var pluginSettings = {
            //~ verbosity: 4,
            playAdAlways: true,
            adCancelTimeout: options.adCancelTimeout || 3000,
            adsEnabled: !!options.adsEnabled,
            vpaidFlashLoaderPath: ''
        };
        if(options.adTagUrl){
            pluginSettings.adTagUrl = options.adTagUrl;
        }
        if(options.adTagXML) {
            pluginSettings.adTagXML = options.adTagXML;
        }
        var vastAd = player.vastClient(pluginSettings);
        player.on('reset', function () {
            if (player.options().plugins['ads-setup'].adsEnabled) {
                vastAd.enable();
            } else {
                vastAd.disable();
            }
        });
        player.on('vast.aderror', function(evt) {
            var error = evt.error;

            if(error && error.message) {
                messages.error(error.message);
            }
        });
    };
    videojs.plugin('ads-setup', adsSetupPlugin);
    var videoEl = document.querySelector('.video-js');
    var adPluginOpts = {
        "plugins": {
            "ads-setup":{
                "adCancelTimeout":10000,// Wait for ten seconds before canceling the ad.
                "adsEnabled": true
            }
        }
    };
    adPluginOpts.plugins["ads-setup"].adTagUrl = 'https://adbless.com/test/vast6.xml';
    player = videojs(videoEl, adPluginOpts);
    if(player) {
        player.on('vast.adStart', function() {
            showPauseBtn();
            player.on('play', showPauseBtn);
            player.on('pause', showResumeBtn);
            player.one('vast.adEnd', function() {
                pauseBtn.style.display = 'none';
                resumeBtn.style.display = 'none';
                player.off('play', showPauseBtn);
                player.off('pause', showResumeBtn);
            });
        });
    }
}
if($('.video-js').length>0){initVideoJs();}
$(document).ready(function(){
    butter();
});

$(window).load(function(){
    init1();
    /*changeViewport();*/
    $('body').attr('style','opacity:1');
});

$(window).resize(function(){
    if($('.sendwich-icon').css('display') == 'none'){
        $('.nav').removeAttr('style');
        $('.sendwich-icon').removeClass('active');
    }
});/**
 * Created by nickolaygotsliyk on 23.06.16.
 */
