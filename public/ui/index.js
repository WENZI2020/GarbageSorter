// JavaScript Document
$().ready(function(){
	$("body").css({"overflow-x":"hidden",
				   "overflow-y":"auto",
				   "padding":"0px",
				   "margin":"0px",
				   "background-color":"rgba(0,51,0,0.6)",
				   "background-image":"url('public/img/schoolview.png')",
				   "background-position":"50% 0%",
				   "background-repeat":"no-repeat"});
	$(".container>div:first").css({"position":"fixed",
								   "top":"0px",
								   "left":"0px",
								   "background-color":"white",
								   "border-top":"1px solid black",
								   "border-bottom":"1px solid #dddddd",
								   "opacity":"0.8",
								   "text-align":"center",
								   "line-height":"36px",
								   "height":"38px",
								   "width":"100%"});
	$(".container>div:last").css({"position":"absolute",
								   "top":"130px",
								   "left":"-15px",
								   "text-align":"center",
								   "text-shadow":"0px 0px 4px black",
								   "color":"white",
								   "width":"100%"});
	$("#pthead").css({"letter-spacing":"1px",
					  "text-shadow":"0px 0px 4px black"});
	$("#pthead").text("|关 于|");
	$("#imghead").attr({"src":"public/img/imghead.png",
						"alt":"HELLO",
						"height":"85px"});
	$("#imghead").css({"cursor":"crosshair",
					   "box-shadow":"0px 0px 3em black",
					   "border":"3px solid gray"});
	$("#p1head").css({"font-size":"6em",
					  "text-indent":"25px",
					  "line-height":"0px"});
	$("#p2head").css({"font-size":"20px",
					  "text-indent":"25px"});
	$("#p1head").html("您好!");
	$("#prohead").css({"color":"white"});
	$("#btnhead").css({"transition":"all 0.5s",
					   "cursor":"grab",
					   "width":"80px",
					   "height":"80px",
					   "font-size":"1em",
					   "font-weight":"bold",
					   "color":"gray",
					   "background-color":"white",
					   "border-radius":"55%"});
	$("#btnhead").html("前进GO");
	$("#btnhead").hover(function(){
		$(this).css({"color":"white",
					 "transform":"rotate(-540deg)",
					 "background-color":"rgba(0,51,0,0.6)"});
		$(this).html("RUN<br/>冲锋");
	},function(){
		$(this).css({"color":"white",
					 "transform":"rotate(-1080deg)",
					 "background-color":"rgba(51,0,0,0.5)"});
		$(this).html("结束END");
	});
	$("#btnhead").click(function(){
		$(this).css({"transition":"",
					 "color":"white",
					 "cursor":"grabbing",
					 "background-color":"gray"});
		window.location.href="main.html";
	});
	for(var i=0;i<1000;i++){
		$("#imghead").fadeToggle(600);
	}
});
var index=0;
var aboutme=function(){
	var arr=new Array();
	arr=["被称作（曾昭文）","学会web前端开发","擅长绘画设计编程","来自计设院软件班","就是本网站制作者"];
	if(index==arr.length){
		index=0;
	}
	$("#p2head").html("我，"+arr[index]+"。");
	index+=1;
}
window.setInterval("aboutme()",1000);
var datetime=function(){
	var date=new Date();
	var time=date.toTimeString().substr(0,8);
	$(".container>div:first").html((date.getMonth()+1)+"月"+date.getDate()+"日 "+time+" 位置");
}
window.setInterval("datetime()",1000);
var xmlhttp=null;
var url="http://data.zz.baidu.com/urls?site=www.oldvocab.cn&token=OwBV5ltExjajISMi";
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("POST",url,true);
                xmlhttp.setRequestHeader('Accept', 'application/json');
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			xmlhttp.responseText;
		}
	}
	xmlhttp.send();
