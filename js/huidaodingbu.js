var tops=document.getElementById("toTop");
tops.onclick=function(){
	document.documentElement.scrollTop = 0;
}
window.onload=function(){
    showTime();
    }
function showTime(){
    var today=new Date();
    var y=today.getFullYear();
    var M=today.getMonth()+1;
  	var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    if(m<10){
     	m='0'+m;
    }
    if(h<10){
    	h='0'+h;
    }
    if(s<10){
    	s='0'+s;
    }
        
    var week=today.getDay();
    var w=new Array('星期天','星期一','星期二','星期三','星期四','星期五','星期六');
    for (var i=0;i<w.length;i++) {
        document.getElementById('time').innerHTML=y+'年'+M+'月'+d+'日'+'<br/>'+'<br/>'+h+":"+m+":"+s+'    '+w[week];
    }    
    setTimeout('showTime()',500);
}