// JavaScript Document
$().ready(function(){
	$("#pnav").parent().hide();
	$("#img1head").attr({"src":"public/img/img1head.png",
						 "alt":"HEAD1"});
	$("#img2head").attr({"src":"public/img/img2head.png",
						 "alt":"HEAD2"});
	$("#img3head").attr({"src":"public/img/img3head.png",
						 "alt":"HEAD3"});
	$("#img4head").attr({"src":"public/img/img4head.png",
						 "alt":"HEAD4"});
	$("#pthead").text("|主 页|");
	$("#img1head").animate({top:"251px"},500,function(){
		$("#img2head").animate({top:"1px"},800,function(){
			$("#img3head").animate({left:"35%"},1400);
			$("#img4head").animate({top:"1px"},150).animate({top:"40px"},1400);
		});
	});
	$("#goahead").attr({"src":"public/img/goahead.png",
						"alt":"HEAD"});
	$("#gobhead").attr({"href":"#pthead"});
	$("#dlnav").addClass("row");
	var $a=$('<dt class="col">回<img id="imgnav"/>首页</dt>');
	$("#dlnav").prepend($a);
	$("#imgnav").attr({"src":"public/img/imgnav.png",
					   "alt":"NAV",
					   "height":"22px"});
	$("#imgnav").parent().click(function(){
		window.location.href="index.html";
	});
	var count=["可回收物","餐厨垃圾","有害垃圾","其他垃圾"];
	for(var i=0;i<count.length;i++){
		var $b=$('<dt class="col">'+count[i]+'</dt>');
		$("#dlnav").append($b);
	}
	var changed=function(change,color){
		$("#dlnav dt:eq("+change+")").hover(function(){
			$(this).css({"color":"white",
						 "background-image":"url('public/img/imgnav"+change+".png')"});
			$("#pnav").parent().stop(true,false);
			$("#pnav").parent().css({"background-color":color});
			$("#pnav").parent().slideDown(600);
		},function(){
			$(this).css({"color":"black",
						 "background-image":""});
			$("#pnav").parent().slideUp(250);
		});
	}
	changed(0,"#dddddd");
	changed(1,"#0171bb");
	changed(2,"#309654");
	changed(3,"#e01a2b");
	changed(4,"#585858");
	
	$("#ulfoot").addClass("row");
	$("#ulfoots").css({"display":"inline",
					   "padding-left":"0px",
					   "text-transform":"uppercase",
					   "text-overflow":"ellipsis",
					   "white-space":"nowrap"});
	var t2='<input type="text"/>';
	var t3='<input type="button" value="留言"/>';
	var t4='<input type="button" value="清除留言"/>';
	var total=["留言区",t2,t3+' '+t4];
	for(var i=0;i<total.length;i++){
		var $z=$('<li class="col">'+total[i]+'<li>');
		$("#ulfoot").append($z);
	}
	var $zs=$('<mark>留言于此</mark>');
	$("#ulfoots").append($zs);
	$("input[type=button]:first").click(function func(){
		var math="";
		for(var i=1;i<=6;i++){
			math+=Math.round(Math.random()*15).toString(16);
		}
		var validate=window.prompt("验证码:"+math,"");
		if(validate==math){
			window.alert("留言完成");
			$zs=$('<mark>'+$("input[type=text]").val()+'</mark>');
			$("#ulfoots").prepend($zs);
			$("input[type=text]").val("");
		}else if(window.confirm("验证码错误\n是否重新提交?")){
			func();
		}else{
			window.alert("留言中止");
		}
	});
	$("input[type=button]:last").click(function(){
		$("#ulfoots").empty();
	});
	$("iframe").attr({"frameborder":"0",
					  "scrolling":"yes",
					  "src":"mains.html",
					  "width":"100%",
					  "height":"800px",
					  "sandbox":""});
});
var index=0;
var imghead=function(){
	var maxIndex=6;
	if(index==maxIndex){
		index=0;
	}
	$("#imghead").animate({right:"-=45%"},950,function(){
		$("#phead").text(index+"/"+maxIndex);
		$(this).attr({"src":"public/img/imghead"+index+".jpg",
					  "alt":"HEAD"});
	});
	$("#imghead").animate({right:"+=45%"},950);
	index+=1;
}
window.setInterval("imghead()",3000);
var status=0;
var pthead=function(){
	if(status%2==0){
		$("title").text("垃圾分类·从我做起");
	}else{
		$("title").text("垃圾分类·定时点投");
	}
	status+=1;
}
window.setInterval("pthead()",1500);