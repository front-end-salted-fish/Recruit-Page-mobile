import zlPlane from './zl-plane'
import rjBanner from './rj-index'
/* $(document).ready(function () {
    　　$('body').height($('body')[0].clientHeight);
    });//解决软键盘覆盖的问题Android---》不知道行不行哈 */
var winHeight = $(window).height(); //获取当前页面高度  
$(window).resize(function () {
    //当窗体大小变化时
    var thisHeight = $(this).height();  //窗体变化后的高度
    if (winHeight - thisHeight > 50) {
        /*
        软键盘弹出
        50是设置的阈值，用来排除其他影响窗体大小变化的因素，比如有的浏览器的工具栏的显示和隐藏
        */
        $('body').css('height', winHeight + 'px');
    } else {
        /*
        软键盘关闭
        */
        $('body').css('height', '100%');
    }
});//监听resize ( Android）
//iOS
$('input,textarea').on('focusin', function () {
    //软键盘弹出的事件处理
    //$(this).scrollIntoView(true);
});

$('input,textarea').on('focusout', function () {
    //软键盘收起的事件处理
});
$('.getmypart').on('tap', function () {
    $('#wf-form').animate({ transform: 'translate(0,0)' }, 800, 'liner');
    console.log('s');
})
//上一页下一页----------------------------------------
$("#next-page").on('tap', function () {
    $('.second-part').animate({ transform: 'translate(0)' }, 300, 'linear');
    $('.first-part').animate({ transform: 'translate(-16rem)' }, 600, 'linear');
});
$(".last-page").on('tap', function () {
    $('.first-part').animate({ transform: 'translate(0)' }, 300, 'linear');
    $('.second-part').animate({ transform: 'translate(16rem)' }, 300, 'linear');
});
//*******************************************验证(在html中设置好了maxlength)
$("#wf-name").on("blur", nameCheck);//1.名字
function nameCheck() {
    let reg = /^[\u4e00-\u9fa5]{2,10}$/;//2-10位中文
    let name = $('#wf-name').val();
    if (!reg.test(name) || name == '') {
        $("#wf-name").css("border", "1px solid red");
        $(".wf-name-span").html("<span class='red-form'>请输入2~10位中文</span>");
        return false;
    }
    $("#wf-name").css("border", "");
    $(".wf-name-span").html("");
    return true;
}
$("#wf-id").on("blur", idCheck);//2.学号
function idCheck() {
    let reg = /^\d{9,12}$/;//十位数字
    let id = $('#wf-id').val();
    if (!reg.test(id) || id == '') {
        $("#wf-id").css("border", "1px solid red");
        $(".wf-id-span").html("<span class='red-form'>请输入正确的学号</span>");
        return false;
    }
    $("#wf-id").css("border", "");
    $(".wf-id-span").html("");
    return true;
}
$("#wf-grade").on("blur", gradeCheck);//3.年级专业
function gradeCheck() {
    let grade = $("#wf-grade").val();
    if (grade == '') {
        $("#wf-grade").css("border", "1px solid red");
        $(".wf-grade-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $("#wf-grade").css("border", "");
    $(".wf-grade-span").html("");
    return true;
}
$("#wf-phone").on("blur", phoneCheck);//4.手机
function phoneCheck() {
    let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    let phone = $("#wf-phone").val();
    if (!reg.test(phone) || phone == '') {
        $("#wf-phone").css("border", "1px solid red");
        $(".wf-phone-span").html("<span class='red-form'>请输入正确的手机号码</span>");
        return false;
    }
    $("#wf-phone").css("border", "");
    $(".wf-phone-span").html("");
    return true;
}

$("#wf-email").on("blur", emailCheck);//5.邮箱
function emailCheck() {
    let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    let email = $('#wf-email').val();
    if (!reg.test(email) || email == '') {
        $("#wf-email").css("border", "1px solid red");
        $(".wf-email-span").html("<span class='red-form'>请输入正确的邮箱</span>");
        return false;
    }
    $("#wf-email").css("border", "");
    $(".wf-email-span").html("");
    return true;
}
$("#wf-intro").on("blur", introCheck);//6.自我介绍
function introCheck() {
    let intro = $("#wf-intro").val();
    if (intro == '') {
        $("#wf-intro").css("border", "1px solid red");
        $(".wf-intro-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $("#wf-intro").css("border", "");
    $(".wf-intro-span").html("");
    return true;
}
$("#wf-skills").on("blur", skillsCheck);
function skillsCheck() {
    let skills = $("#wf-skills").val();
    if (skills == '') {
        $("#wf-skills").css("border", "1px solid red");
        $(".wf-skills-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $("#wf-skills").css("border", "");
    $(".wf-skills-span").html("");
    return true;
}
$("#wf-cog").on("blur", cogCheck);
function cogCheck() {
    let cog = $("#wf-cog").val();
    if (cog == '') {
        $("#wf-cog").css("border", "1px solid red");
        $(".wf-cog-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $("#wf-cog").css("border", "");
    $(".wf-cog-span").html("");
    return true;
}
//提交表单
//$("#wf-commit").attr("disabled", true);
$("#wf-commit").on('tap', function () {
    //获取到所有的表单元素并转换为数组
    //var info1 = $('form').serializeArray();
    //var info2 = $('.second-part-form').serializeArray();
    //info1 = info1.concat(info2);
    //console.log(info1);
    /* function emptyCheck() {
        for (var i = 0; i < 10; i++) {
            if (info1[i].value == '') {
                return false;//有元素没填
            }
        }
    } */
    //进行判断
    var btn = $(this);
    //if (btn.attr("disabled") == 'true') {//可点
    /*         btn.attr('disabled', true);
                setTimeout(function () {
                    btn.attr('disabled', false);
                }, 2000); */
    if (nameCheck() && idCheck() && gradeCheck() && phoneCheck() && emailCheck() && introCheck() && skillsCheck() && cogCheck()) {
        //在这里提交，小飞机 
        zlPlane();
    }
    else console.log("请正确输入信息");
    //}

    //
    //关闭弹窗，动画
})
//回到详情页
$('.wf-close').tap(function () {
    let $formPage = $('#zl-form-page');
    // 排他


    $formPage.fadeIn();
    $formPage.siblings('#zl-detail-pages').fadeIn();

    $('#wf-form').removeClass('zl-become-small');
    $('#wind').css({
        display: 'none'
    })
    $('.second-part').animate({ transform: 'translate(16rem)' }, 800, 'linear');
    $('#wf-form').fadeOut(1000);
});
