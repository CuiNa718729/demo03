//中间部分   图片轮播
function imgLoop(){
    var n= $(".cycle-slideshow img").attr("alt");
    n++;
    if(n>3)
        n=1;
    $(".cycle-slideshow img").attr({
        src:"img/about_"+n+".png",
        alt:n
    })
//            console.log(n);
}
var timer=setInterval(imgLoop,1500);
$(".cycle-slideshow img").mouseover(function(){
    clearInterval(timer);
})
$(".cycle-slideshow img").mouseout(function(){
    timer= setInterval(imgLoop,1500);
})