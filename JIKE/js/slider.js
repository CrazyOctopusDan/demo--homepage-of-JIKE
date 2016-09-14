define(function(require, exports, module) {

    // 通过 require 引入依赖
    var jQuery = require('jquery.min');

    //===============定义一下全局变量========================
    var curIndex = 1;
    var imgNum = $(".img-list img").length;
    //===============设置一下自动切换处理=====================
    var autochange = setInterval(function() {
        (curIndex < imgNum - 1) ? (curIndex++) : (curIndex = 0);
        changeTo(curIndex);
    }, 2500);
    //console.log($(".img-list").position().left);
    //===============设置一下自动切换处理=====================
    function autoChangeAgain() {
        autochange = setInterval(function() {
            if (curIndex < imgNum - 1) {
                curIndex++;
            } else {
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        }, 2500);
    }

    //===============绑定一下箭头事件========================
    //prev
    $(".s_prev").hover(function() {
        //滑入清除定时器
        clearInterval(autochange);
    }, function() {
        //滑出则重置定时器
        autoChangeAgain();
    });
    $(".s_prev").click(function() {
        curIndex = (curIndex > 0) ? (--curIndex) : (imgNum - 2);
        changeTo(curIndex);
    });
    //next
    $(".s_next").hover(function() {
        clearInterval(autochange);
    }, function() {
        autoChangeAgain();
    })
    $(".s_next").click(function() {
        curIndex = (curIndex < imgNum - 1) ? (++curIndex) : 1;
        changeTo(curIndex);
    });
    //===============设置底下条纹=======================
    $(".list-button").find("span").each(function(){
      var myIndex = $(this).attr("index");
     $(this).hover(function(){
      clearInterval(autochange);
      changeTo(myIndex);
      curIndex = myIndex;
     },function(){
      autoChangeAgain();
     })

    });
    //===============设置转换颜色的函数=======================
    function changeTo(num) {
        var toLeft = num * 560;
        var left = $(".img-list").position().left;
        //next的无限循环
        if (num == 6) {

            $(".img-list").animate({ left: "-" + toLeft + "px" }, 500, function() {
                $(".img-list").css({ "left": "-560px" });
                curIndex = 1;
                num = 1;
                $(".list-button").find("span").removeClass("on").eq(0).addClass("on");
            });

        }
        //prev的无限循环
        else if (num == 0) {
            $(".img-list").animate({ left: "-" + toLeft + "px" }, 500, function() {
                $(".img-list").css({ "left": "-2800px" });
                curIndex = 5;
                num = 5;
            });
        }
        //正常的循环
        else {
            $(".img-list").animate({ left: "-" + toLeft + "px" }, 500);
        }
        // console.log($(".img-list").position().left);
        //绑定条纹
        $(".list-button").find("span").removeClass("on").eq(num - 1).addClass("on");
    };
//console.log($(".list-button span").attr("index"));


    //结束
});
