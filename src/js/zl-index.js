import $ from '../../lib/myZepto'
// import qianduan from '../../img/1575287686458.jpg'
// 放置逻辑功能的主函数

$(function() {
   
    // 获取所有图片
    // 获取报名按钮，并且为报名按钮绑定点击跳转事件
    // 点击按钮时给表单设置css display:none  ---2020/01/22
    let $joinBtn = $('.zl-join .btn');
    let $rjCircle = $('.rj-menu-overlay_circle');   // 打开表单的放大圆点
    $joinBtn.tap(function(e) {
        
        let $formPage = $('#zl-form-page');
        $rjCircle.css({
            'top': e.clientY + 'px'
        }).addClass('rj-circle-openning');   // 圆点放大
        $formPage.fadeIn();
            // 排他
        $('#wf-form').addClass('rj-openning').scrollTop(0);
        $formPage.animate({
        }, {
            duration: 1,
            easing: '',
            complete: () => { 
                $formPage.siblings('#zl-detail-pages').fadeOut(0);
            },
            delay: 800
        });
        $('#wf-form').removeClass('zl-become-small');
        $('#wind').css({
            display: 'none'
        })
        $('.first-part').attr("style",'').scrollTop(0);
        // $('.second-part').animate({ transform: 'translate(16rem)' }, 800, 'linear');
    });
})
