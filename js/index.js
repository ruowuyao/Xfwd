$(document).ready(function(){
	function show(){//点击微信绿色图标，二维码出现
		$('#img1').hover(
            function(){
            	$("body").append("<img id='img2' src='images/qr.jpg' alt='二维码'/>");
            },function(){
            	$("body").find("#img2").remove();
            }
	    );
	}
	show();
});