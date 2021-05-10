// 首先获取元素
var swiperBtnLeft=document.getElementById("swiper-btn-left");
var swiperBtnRight=document.getElementById("swiper-btn-right");
var swiperBox=document.getElementsByClassName("swiper-box")
console.log(swiperBox);
var img=document.getElementById("img");
var swiperPoint=document.querySelectorAll("#swiper-btn-point>ul>li");
var imgarr=["swiper2.webp","swiper3.webp","swiper4.webp","swiper1.jpg","swiper5.webp"];
var i;
// js实现上一张下一张
swiperBtnRight.onclick=function(){
        i++;
        if(i>4){
            i=0;
        }
    img.src='images/'+imgarr[i];
}
swiperBtnLeft.onclick=function(){
    i--;
   if(i<0){
       i=4;
   }
   img.src='images/'+imgarr[i];
}
// 自动轮播
self.setInterval("swiperBtnRight.onclick()",5000);
// 右下角圆点与图片同步
function show(index){
    for(var i=0;i<5;i++){
        if(i===index){
            // 这里可以使用index，因为只操作一个元素，在相等的时候
            img.src='images/'+imgarr[index];
            swiperPoint[index].style.cssText='background-color:#fff'
        }else{
            // 这里应该取i的值，如果取index的值，点击的话，与i的值不相等的都会变色，并且只能变一个的颜色，变色的为index下标
           swiperPoint[i].style.cssText='background-color:#b0b0b0;'
        }
    }
}