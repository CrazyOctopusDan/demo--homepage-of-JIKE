define(function(require, exports, module) {

  var jQuery = require('jquery.min');

  //===============定义一下全局变量========================
  curIndex = 1;
  var imgNum = $(".lesson_list a").length;
  //console.log(imgNum);
  //===============绑定一下左部箭头========================
 $(".ls_prev").click(function(){
 	if(curIndex <(imgNum - 1)){
 		--curIndex;
 	}else{
 		curIndex = (imgNum -2);
 	};
 	changeTo(curIndex);
 })
 //===============绑定一下右部箭头========================
 $(".ls_next").click(function(){
 	if(curIndex <(imgNum - 1)){
 		++curIndex;
 	}else{
 		curIndex = 1;
 	};
 	changeTo(curIndex);
 

 })
  //===============定义变色函数========================
  	function changeTo(num) {
  		var toLeft = num * 186.5;
  		// 向右无限
  		if (num == (imgNum - 3)) {
  			$(".lesson_list").animate({left:"-" + toLeft + "px"}, 500, function(){
  				$(".lesson_list").css({"left" : "-186.5px"});
  				curIndex = 1;
  				num = 1;
  			});
  		}
  		 //向左无限
  		 else if(num == 0){
  			$(".lesson_list").animate({left:"-" + toLeft + "px"}, 500, function(){
  				$(".lesson_list").css({"left":"-559.5px"});
  				curIndex = 3;
  				num = 3;
  			});
  		}
  		// //其他所有情况
  		 else{
  			$(".lesson_list").animate({left:"-" + toLeft + "px"},500);
  		 };
  		
  	}


});