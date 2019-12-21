import zlPlane from './zl-plane'
$('.getmypart').on('click', function () {
    $('#wf-form').animate({ transform: 'translate(0,0)' }, 800, 'liner');
    console.log('s');
})
//上一页下一页----------------------------------------
$("#next-page").on('click', function () {
    $('.second-part').animate({ transform: 'translate(0)' }, 800, 'linear');
    //console.log('a');
    /* $(".second-part").css({
        transform: 'translate(0)'
    }); */
});
$(".last-page").on('click', function () {
    $('.second-part').animate({ transform: 'translate(16rem)' }, 800, 'linear');
    //console.log('a');
    //$(".second-part").css({right:'-16rem'});
});
//返回轮播图
$('.close').on('click',function(){

})
//提交表单
$("#wf-commit").on('click',function(){
    //获取到所有的表单元素并转换为数组
    var info1 = $('form').serializeArray();
    var info2 = $('.second-part-form').serializeArray();
    //info1 = info1.concat(info2);  
    console.log(info1);
    //进行判断
    // for(var i = 0; i < 10; i++){
    //     if(info1[i].value==''){
    //         //弹窗
    //         //break
    //     }
    // }
    //ajax

    //如果成功，弹窗
    
    zlPlane();
    //关闭弹窗，动画
})
