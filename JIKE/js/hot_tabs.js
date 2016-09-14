define(function(require, exports, module) {
    // 引入jq的库
    var jQuery = require('jquery.min');
    //================给li添加事件=================
    $(".hotlesson").find("li").hover(function() {
        var index = $(this).index();
        $(this).addClass("h_active").siblings().removeClass("h_active");
        //console.log(index);
        $(".hotlesson_box").eq(index).addClass("hb_active").siblings().removeClass("hb_active");
    });
    //=================给div添加事件==================
    $(".hotlesson_box").children("div").hover(function() {
        var divIndex = $(this).index();
        $(this).animate({
            "height": "275px",
            "z-index": "50"
        });
        $(".hb_active>div").find("p").eq(divIndex).fadeIn();

    }, function() {
        var divIndex = $(this).index();
        $(this).animate({
            "height": "225px",
            "z-index": "20"
        });
        $(".hb_active>div").find("p").eq(divIndex).fadeOut();

    });
});
