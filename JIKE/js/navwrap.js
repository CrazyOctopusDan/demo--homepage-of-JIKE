define(function(require, exports, module) {

  var jQuery = require('jquery.min');
  
  $(".wrappers").hover(function(){
    $(".nav_ul>ul").find("ul").css({
      "display":"block"
    })
  },function(){
    $(".nav_ul>ul").find("ul").css({
      "display":"none"
    })
  });

  $(".nav_ul ul").hover(function(){
    $(this).find("ul").css({
      "display":"block"
    })
  },function(){
    $(".nav_ul>ul").find("ul").css({
      "display":"none"
    });
    // $(".nav_ul .wrappers").css({
    //   "display":"none"
    // });
  })

});