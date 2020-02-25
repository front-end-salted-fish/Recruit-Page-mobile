// import $ from 'jquery'
import $ from 'zepto'
import 'zepto/src/touch'
import rjBanner from './rj-index'
import { closeForm } from './form'
import ewmImgSrc from '../../img/ewm.jpg'
import html2canvas from 'html2canvas';
console.log(closeForm);  // 记得扫完二维码回到最初起点时调用
const $ewmWrap = $('#plane .check-ewm-wrap');


let ewmImg = new Image();
ewmImg.src = ewmImgSrc;
$(ewmImg).css({
  width: "64%",
})
$ewmWrap.append(ewmImg);

// $.fn.longPress = function(fn) {
// 	let timeout = 0;
// 	const $this = this;
// 	for (let i = 0; i < $this.length; i++) {
// 	  $this[i].addEventListener('touchstart', () => {
// 		timeout = setTimeout(fn, 800); // 长按时间超过800ms，则执行传入的方法 
// 	  }, false);
// 	  $this[i].addEventListener('touchend', () => {
// 		clearTimeout(timeout); // 长按时间少于800ms，不会执行传入的方法
// 	  }, false);
// 	}
//   };
//   $('img').longPress(() => {
// 	saveImg();
//   });
//    let saveImg = () => {
// 	// 想要保存的图片节点
// 	const dom = $('#plane .check-ewm-wrap img').get(0);
  
// 	// 创建一个新的canvas
// 	const Canvas = document.createElement('canvas');
// 	const width = document.body.offsetWidth;  // 可见屏幕的宽
// 	const height = document.body.offsetHeight;  // 可见屏幕的高
// 	const scale = window.devicePixelRatio;  // 设备的devicePixelRatio
  
// 	// 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
// 	Canvas.width = width * scale;
// 	Canvas.height = height * scale;
// 	Canvas.getContext('2d').scale(scale, scale);
  
// 	html2canvas(dom, {
// 	  canvas: Canvas,
// 	  scale,
// 	  useCORS: true,
// 	  logging: true,
// 	  width: width + 'px',
// 	  hegiht: height + 'px',
// 	}).then((canvas) => {
// 	  const context = canvas.getContext('2d');
// 	  // 关闭抗锯齿形
// 	  context.mozImageSmoothingEnabled = false;
// 	  context.webkitImageSmoothingEnabled = false;
// 	  context.msImageSmoothingEnabled = false;
// 	  context.imageSmoothingEnabled = false;
// 	  // canvas转化为图片
// 	  const img = canvas2Image(canvas, canvas.width, canvas.height);
// 	  document.body.appendChild(img);
// 	  img.style.cssText = "width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;";
// 	})
//   }

//    let canvas2Image = (canvas, width, height) => {
// 	const retCanvas = document.createElement('canvas');
// 	const retCtx = retCanvas.getContext('2d');
// 	retCanvas.width = width;
// 	retCanvas.height = height;
// 	retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
// 	const img = document.createElement('img');
// 	img.src = retCanvas.toDataURL('image/jpeg');  // 可以根据需要更改格式
// 	return img;
//   }






 let zlPlane = () => {
	let $wind = $('#wind');
    // 纸飞机
	    // 起飞
	    // $('.zl-btn').tap(function() {
			$('#wf-form').addClass('zl-become-small')
            $('#plane').css({
                    opacity: 0
                })
            $('#wind').show().addClass('zl-wind-zindex');
	        // 步骤一：隐藏面板、显示飞机、完成折叠效果
	        setTimeout(function() {
                // 隐藏信息面板
            	$('#wf-form').fadeOut()
	            $('#plane').removeClass('front');
	            // 翻转至正面
	            $('#wind_container').removeClass('beginning');
	            // 折叠效果（左翼、右翼）
	            $('.curvable').addClass('curved');
	            // 颜色变换
                $wind.css({"background-color": "#54575A"});
	            // 步骤二：平放飞机
	            setTimeout(function() {
	                $('#wind_container').addClass('hover');
	                $wind.css({"background-color": "#AD8BD8"});
	                // 步骤三：飞机后退助跑
	                setTimeout(function() {
	                    $('#wind_container').addClass('fly_away_first');
	                    $wind.css({"background-color": "#6E99C4"});
	                    // 步骤四：飞机向前飞翔至消失
	                    setTimeout(function() {
	                        $('#wind_container').addClass('fly_away');
	                        $wind.css({"background-color": "#3F9BFF"});
	                        // 步骤五：飞机复位
	                        setTimeout(function(){
                                $('#plane').addClass('front');
                                $('#plane').css({
                                    opacity: 1
                                })
	                            $('#wind_container').removeClass('fly_away fly_away_first hover').addClass('beginning');
	                            $('.curvable').removeClass('curved');
	                            // $wind.css({"background-color": "#ccc"}).removeClass('.zl-wind-zindex');
								$wind.css({
								"background": '#0F2027',  /* fallback for old browsers */
								"background": "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",  /* Chrome 10-25, Safari 5.1-6 */
								"background": "linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
								}).removeClass('.zl-wind-zindex');
	                        },2000);
	                    }, 400);
	                }, 1333.3);
	            }, 1866.7);
	        }, 600);
	    // });
		// 关闭弹窗返回首页
	
	    $("#wind .send").on('click',function(){
				// rjBanner.stop();
				// console.log('卓伦');
				// $('#wf-form').fadeIn();
				// if(rjBanner.isInDetailPage) {
				// 	rjBanner.backToBanner(()=>{
				// 		$('.rj-menu-overlay_circle').css('display', 'none');
				// 		closeForm();
				// 	},()=>{
				// 		$('.rj-menu-overlay_circle').css('display', '');
				// 	});
				// }
				// else closeForm();
				// window.location.reload()
	    });
 }
 export default zlPlane;
// $(function(){
	
	 
// 	});