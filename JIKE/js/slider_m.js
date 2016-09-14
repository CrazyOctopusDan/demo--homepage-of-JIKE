define(function(require, exports, module) {

  var jQuery = require('jquery.min');

  //===============定义一下全局变量========================
  curIndex = 1;
  var imgNum = $(".m_img_list img").length;
  //console.log(imgNum);
  //===============绑定一下左部箭头========================
 $(".m_prev").click(function(){
 	if(curIndex <(imgNum - 1)){
 		--curIndex;
 	}else{
 		curIndex = (imgNum -2);
 	};
 	//console.log(curIndex);
 	changeTo(curIndex);
 })
 //===============绑定一下右部箭头========================
 $(".m_next").click(function(){
 	if(curIndex <(imgNum - 1)){
 		++curIndex;
 	}else{
 		curIndex = 1;
 	};
 	changeTo(curIndex);
 	//console.log(curIndex);

 })
  //===============定义变色函数========================
  	function changeTo(num) {
  		var toLeft = num * 164;
  		//console.log(num);
  		// 向右无限
  		if (num == (imgNum - 6)) {
  			$(".m_img_list").animate({left:"-" + toLeft + "px"}, 500, function(){
  				$(".m_img_list").css({"left" : "-164px"});
  				curIndex = 1;
  				num = 1;
  			});
  		}
  		 //向左无限
  		 else if(num == 0){
  			$(".m_img_list").animate({left:"-" + toLeft + "px"}, 500, function(){
  				$(".m_img_list").css({"left":"-656px"});
  				curIndex = 4;
  				num = 4;
  			});
  		}
  		// //其他所有情况
  		 else{
  			$(".m_img_list").animate({left:"-" + toLeft + "px"},500);
  		 };
  		
  	}


});