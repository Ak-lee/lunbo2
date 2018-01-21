var n=1;
var index,lastIndex
setInterval(function(){
index=(n+5)%6+1;
lastIndex=(n+6)%6+1;
$(`.images>img:nth-child(${index})`).removeClass('current').addClass('leave')
.one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('enter')});

$(`.images>img:nth-child(${lastIndex})`).removeClass('enter').addClass('current');
n+=1;
}
,5000)