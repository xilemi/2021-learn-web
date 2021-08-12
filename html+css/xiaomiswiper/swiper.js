var img=document.getElementById('swiper-img');
/* var leftbtn=document.getElementById('left-btn');
var rightbtn=document.getElementById('right-btn'); */
var title=document.getElementById("title");
var imgarr=["xiaomi2.jpg","xiaomi1.webp","xiaomi3.webp"];
let i=0;
function pre(){
    i--;
    if(i<0){
        i=2
    }
    img.src='image/'+imgarr[i];
    // 字符串的拼接 字符是需要双引号的，变量直接用加号拼接。
    title.innerHTML="现在是第"+(i+1)+"张,共有"+(imgarr.length)+"张。";
}
function next(){
    i++;
    if(i>2){
        i=0
    }
    img.src='image/'+imgarr[i];
    title.innerHTML="现在是第"+(i+1)+"张,共有"+(imgarr.length)+"张。";
}
var interval=setInterval("next()",5000);

 
