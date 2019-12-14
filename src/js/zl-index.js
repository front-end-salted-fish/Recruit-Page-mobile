import $ from '../../lib/myZepto'
import qianduan from '../../img/1575287686458.jpg'
// 放置逻辑功能的主函数

$(function() {
    // 创建img对象
    // let $bannerTest = $('.zl-img-container');
    // let img = new Image();
    // let $mask = $('.zl-banner-mask');
    // // 将是否需要提示放入localstorage中
    // let isPromoted = undefined;
    // if (sessionStorage.getItem('isPromoted')) {
    //     // 表明localStorage存在isPromoted，此时直接获取
    //     isPromoted = JSON.parse(sessionStorage.getItem('isPromoted'));
    // } else {
    //     // 表明localStorage不存在isPromoted，此时需要创建
    //     // sessionStorage
    //     sessionStorage.setItem('isPromoted', false);
    // }
    // console.log(isPromoted+'1')
    // 模拟在进入轮播图之前存在动画
    // setTimeout(function() {
    //     if (!isPromoted) {
    //         console.log(2)
    //         $mask.show(1000);
    //     }
    // },2000)
    // 动态插入模拟的轮播图图片
    // img.src = qianduan;
    // $bannerTest.append(img);
    // // 等待图片加载完后，获取图片的宽和高,并且将其宽高设置给隐藏的盒子
    // img.onload = function() {
    //     let imgHeight = img.height;
    //     let imgWidth = img.width;
    //     let $rectangular = $('.zl-rectangular');
    //     $rectangular.css({
    //         height: imgHeight,
    //         width: imgWidth
    //     });
    //     // 等待图片加载完后，给文档绑定tap事件，隐藏遮罩
    //     if (!isPromoted) {
    //         $(document).tap(function() {
    //             $mask.hide(1000);
    //             // 修改其中的值，这样子刷新后就不会再出现提示
    //             sessionStorage.setItem('isPromoted', true);
    //         })
    //     }
    //     //点击文字图片后，进入详情页
    //     $(this).tap(function() {
    //         let $detailPage = $('#zl-detail-pages');
    //         // 排他
    //         $detailPage.siblings().hide(1000);
    //         $detailPage.show(1000);
    //     })
    // }
    // 获取所有图片
    // 获取报名按钮，并且为报名按钮绑定点击跳转事件
    let $joinBtn = $('.zl-join .btn');
    $joinBtn.tap(function() {
        let $formPage = $('#zl-form-page');
            // 排他
        $formPage.siblings('#zl-detail-pages').fadeOut(1000);
        $('.zl-form').fadeIn()
        $('.zl-form').removeClass('zl-become-small');
        $('#wind').css({
            display: 'none'
        })
        $formPage.fadeIn(1000);
    });
  
    // 回退按钮的功能
    // let $backBtn = $('.zl-back-btn');
    // $backBtn.tap(function() {
        // let $bannerPage = $('#rj-banner');
            // 排他
        // $bannerPage.siblings().hide(1000);
        // $bannerPage.show(1000);
    // })
})
