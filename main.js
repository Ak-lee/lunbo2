var n=1;
var index,nextIndex
timer=setInterval(function(){
index=(n+5)%6+1;
nextIndex=(n+6)%6+1;
$(`.images>img:nth-child(${index})`).removeClass('current').addClass('leave')
.one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('enter')});

$(`.images>img:nth-child(${nextIndex})`).removeClass('enter').addClass('current');
n+=1;
}
,5000)
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer=setInterval(function(){
            index=(n+5)%6+1;
            nextIndex=(n+6)%6+1;
            $(`.images>img:nth-child(${index})`).removeClass('current').addClass('leave')
            .one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('enter')});
            
            $(`.images>img:nth-child(${nextIndex})`).removeClass('enter').addClass('current');
            n+=1;
            }
            ,5000)
    }
})