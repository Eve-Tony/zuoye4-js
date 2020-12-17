var interbalId;
var num2=900;
var num4=100;
var judge=true;
var piaofu = document.getElementById("piaofu");
var guanbi = document.getElementById("guanbi");
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}
	else{
		return getComputedStyle(obj)[style];
	}
}
function moveDiv(){
	interbalId= window.setInterval(function(){
		var random=parseInt(Math.random()*4+1);
		var random2=parseInt(Math.random()*2+1);
		if(judge==true){
			piaofu.style.left=num2+"px";
			piaofu.style.top=num4+"px";
			num2=num2-random;
			num4=num4+random2;
		}
		if(judge==false){
			piaofu.style.left=num2+"px";
			piaofu.style.top=num4+"px";
			num2=num2+random;
			num4=num4-random2;
		}

		if(num2<=0){
	 		num2=0;
	 		if(judge==false){
	 			judge=true;
	 		}else{
	 			judge=false;
	 		}
		}	
		if(num4<=0){
			num4=0;
			if(judge==false){
	 			judge=true;
	 		}else{
	 			judge=false;
	 		}
		}
    },20);       
}
moveDiv();
piaofu.onmouseover  = function(){
	clearInterval(interbalId);
}
guanbi.onclick=function(){
	piaofu.style.display="none";
}
piaofu.onmouseout  = function(){
	moveDiv();
}

