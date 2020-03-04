import $ from 'zepto'
import 'zepto/src/touch'
// import rjBanner from './rj-index'
// import { closeForm } from './form'
// import ewmImgSrc from '../../img/ewm.jpg'
//  // 记得扫完二维码回到最初起点时调用


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

			$('.zl-send-modal').css({
				'display': 'block'
			})
				// rjBanner.stop();
				// 
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