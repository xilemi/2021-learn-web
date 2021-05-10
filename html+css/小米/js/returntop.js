$(".return").hide();
$(function(){
    $(window).scroll(function(){       //scroll()实现页面滚动时 执行function函数
        if($(window).scrollTop()>1000){//scrollTop()获取页面距顶部的长度外面套if判断
            $(".return").show();//控制.return 的div 显示
        }
        else{
            $(".return").hide();
        }
    })
});
$(".return").click(function(){   //点击click启动 function函数 函数内容为让body，html的距离顶部的高度为0
    // $('body,html').animate({scrollTop:0},100);
    $('body,html').scrollTop()=0;
    return false;
});

