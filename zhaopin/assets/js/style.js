var video = document.getElementById("video");
var music = document.getElementById("music");

var off = true;
var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	    video.play();
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
    });
var swiperH = new Swiper('.swiper-container-h1', {
        pagination: '.swiper-pagination-h1',
        paginationClickable: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	    video.play();
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    alert(1);
	  } 
    });
var swiperH = new Swiper('.swiper-container-h2', {
        pagination: '.swiper-pagination-h2',
        paginationClickable: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	    video.play();
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
    });
var swiperV = new Swiper('.swiper-container-v', {
    paginationClickable: true,
    direction: 'vertical',
    loop: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	    video.play();
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
});
$(music).on('click',function(){
	if(off){
		video.pause();
		$('#small').css('display','none');
		off=false;
	}else{
		video.play();
		$('#small').css('display','block');
		off=true;
	}
})
