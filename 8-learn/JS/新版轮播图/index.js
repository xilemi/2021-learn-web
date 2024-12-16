// 设置img自适应宽度imgList
var imgList=document.getElementById("imgList");
var imgArr=document.getElementsByTagName("li");
imgList.style.width=1246*imgArr.length+"px"
// 设置开始轮播
// 设置轮播索引
var index=0;
var allA=document.getElementsByTagName("a");
allA[index].style.backgroundColor="pink";
for(var i=0;i<allA.length;i++){
    // 为所有的a添加一个编号
    allA[i].num=i;
    allA[i].onclick=function(){
        index=this.num;
        // autoIndex=index;
        setA(index);
        // imgList.style.left=-1246*index+"px";
        move(imgList,-1246*index,200,function(){});
    }
}
// 现将所有的a设置为白色，然后点击后就变色点击的那个a
function setA(i){
    for(var j=0;j<allA.length;j++){
        allA[j].style.backgroundColor="";
    };
    allA[i].style.backgroundColor="pink";
}
// 创建动画移动move方法
function move(obj,target,speed,callback) {
    clearInterval(timer);
    var current=parseInt(obj.style.left);
    if(current>target){
        speed=-speed;
    }
    var timer=setInterval(function(){
        // 让当前值与目标值比较，只考虑当前值大于目标值的情况
        var oldLeft=parseInt(obj.style.left);
        var newLeft=oldLeft+speed;
        if((speed>0&&newLeft>target)||(speed<0&&newLeft<target)){
            newLeft=target;
        }
        obj.style.left=newLeft+"px";
        if(newLeft==target){
            clearInterval(timer);
        }
    },50);
    callback();
}
var autoIndex=0;
var auto;
function autoSwiper(){
        auto=setInterval(function(){
        autoIndex++;
        if(autoIndex==imgArr.length){
            imgList.style.left=0
            autoIndex=0;
        }
        move(imgList,-1246*autoIndex,30,function(){
            setA(autoIndex);
        }); 
    },3000);
}
autoSwiper();
// 设置鼠标悬停停止轮播
imgList.onmouseenter=function(){
    clearInterval(auto);
}
imgList.onmouseleave=function(){
    autoSwiper();
}
h

