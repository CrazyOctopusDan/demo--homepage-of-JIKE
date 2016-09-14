define(function(require, exports, module) {
// 引入JQ的库
  var jQuery = require('jquery.min');
 
 $(window).scroll(function(){
        if ($(window).scrollTop()>10) {
            $(".backtotop").fadeIn(500);
        }else{
            $(".backtotop").fadeOut(500);
        }
    });
    $(".backtotop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});