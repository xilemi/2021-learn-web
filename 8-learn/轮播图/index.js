var indexBody = document.querySelector(".index_body");
var btnLeft = document.querySelector(".left_btn");
var btnRight = document.querySelector(".right_btn");
var slideBox = document.querySelector('.slidebox');
var items = slideBox.getElementsByClassName("slide_item");

//使用web animations创建动画，左滑和右滑共用一个动画
var slidingLeft = [
	{marginLeft: '0px', opacity: 1},
	{opacity: 0.6, offset: 0.7},
	{marginLeft: "-5rem", opacity: 1}
];

var sliding = slideBox.animate(
	slidingLeft,
	{
		duration: 1500,
		easing: 'ease-in-out',
	}
);

sliding.onfinish = function(){
	slideBox.style.marginLeft = '0px';
	if(sliding.playbackRate != -1){
		slideBox.appendChild(items[0]);
	}
	btnRight.onclick = slideRight;
	btnLeft.onclick = slideLeft;
};

function slideRight(){
	sliding.playbackRate = 1; //切换滑动方向为右
	sliding.play();
	btnLeft.onclick = null;
	btnRight.onclick = null;
	console.log(sliding.effect);
};

function slideLeft(){
	slideBox.insertBefore(items[items.length - 1],items[0]);
	slideBox.style.marginLeft = '-5rem';
	sliding.playbackRate = -1; //切换滑动方向为左
	sliding.play();
	btnLeft.onclick = null;
	btnRight.onclick = null;
};

btnRight.onclick = slideRight;
btnLeft.onclick = slideLeft;

//自动滑动
var slideTimer = setInterval(() => {
	btnRight.click();
},3000);

//鼠标悬停时停止滑动
indexBody.onmouseover = function(){
	clearInterval(slideTimer);
};

//鼠标离开时继续自动滑动
indexBody.onmouseout = function(){
	slideTimer = setInterval(() => {
		btnRight.click();
	},3000);
};