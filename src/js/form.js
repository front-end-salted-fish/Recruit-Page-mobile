import zlPlane from './zl-plane'
import rjBanner from './rj-index'
import filterXSS from 'xss'

// 初始化表单数据,用于发给后台的表单数据
let formData = {
    username: '', // 姓名
    studentId: '', // 学号
    gradeProfessional: '', // 年级班级
    sex: '', // 性别
    phone: '', // 手机号码
    email: '', // 邮箱
    introduction: '', // 自我介绍
    direction: '', // 选择的方向
    skills: '', // 你所掌握的技能
    idea: '', // 你对我们工作室的想法
    checkFront: '', // 前端动态生成的验证码
    checkBack: '' // 用户填写的验证码
};
// import formTopImg from '../../img/form-top.jpg'
// import formBottomImg from '../../img/form-bottom.jpg'
// $('#rj-form-top').attr('src', formTopImg);
// $('#rj-form-bottom').attr('src', formBottomImg);
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
//------------------------------------------------------------------关注focus
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
    $("#rj-steps-container").addClass("rj-form-page2");
    $('.second-part').animate({ transform: 'translate(0)' }, 300, 'linear').scrollTop(0);
    $('.first-part').animate({ transform: 'translate(-16rem)' }, 300, 'linear');
});
$(".last-page").on('tap', function () {
    $("#rj-steps-container").removeClass("rj-form-page2");
    $('.first-part').animate({ transform: 'translate(0)' }, 300, 'linear').scrollTop(0);
    $('.second-part').animate({ transform: 'translate(16rem)' }, 300, 'linear');
    // $('.second-part').css({display: 'none'})
    // $('.first-part').css({display: 'block'})
});
//******************************************* 验证(在html中设置好了maxlength)
$(".rj-form-input").on("focus", function () {
    let $field = $(this.parentNode);
    // console.log($field);
    if ($field[0].className === 'rj-field') {
        $field.addClass("rj-field-ready");
    }
});
let $wfName = $("#wf-name");        // 输入名字的input框
$wfName.on("blur", nameCheck);//1.名字
function nameCheck() {
    let reg = /^[\u4e00-\u9fa5]{2,10}$/;//2-10位中文
    let name = $wfName.val();
    let $field = $wfName.parent('.rj-field');
    name = filterXSS(name)
    formData.username = name
    console.log(name)
    if (!reg.test(name) || name == '') {
        // 如果输入为空或者格式错误
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $("#wf-name").css("border", "1px solid red");
        // $(".wf-name-span").html("<span class='red-form'>请输入2~10位中文</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $("#wf-name").css("border", "");
    // $(".wf-name-span").html("");
    return true;
}

$(".rj-gender-select").on("tap", function () {
    $(this).toggleClass("rj-boy rj-girl");
})

let $wfId = $("#wf-id");
$wfId.on("blur", idCheck);//2.学号
function idCheck() {
    let reg = /^\d{9,12}$/;//十位数字
    let id = $wfId.val();
    formData.studentId = id;
    let $field = $wfId.parent('.rj-field');
    if (!reg.test(id) || id == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $("#wf-id").css("border", "1px solid red");
        // $(".wf-id-span").html("<span class='red-form'>请输入正确的学号</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");

    // $("#wf-id").css("border", "");
    // $(".wf-id-span").html("");
    return true;
}
let $wfGrade = $("#wf-grade");
$wfGrade.on("blur", gradeCheck);//3.年级专业
function gradeCheck() {
    let grade = $wfGrade.val();
    let $field = $wfGrade.parent(".rj-field");
    grade = filterXSS(grade)
    formData.gradeProfessional = grade;

    if (grade == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $("#wf-grade").css("border", "1px solid red");
        // $(".wf-grade-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $("#wf-grade").css("border", "");
    // $(".wf-grade-span").html("");
    return true;
}
let $wfPhone = $("#wf-phone");
$wfPhone.on("blur", phoneCheck);//4.手机
function phoneCheck() {
    let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    let phone = $wfPhone.val();
    let $field = $wfPhone.parent(".rj-field");
    phone = filterXSS(phone)
    formData.phone = phone
    if (!reg.test(phone) || phone == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $wfPhone.css("border", "1px solid red");
        // $(".wf-phone-span").html("<span class='red-form'>请输入正确的手机号码</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $("#wf-phone").css("border", "");
    // $(".wf-phone-span").html("");
    return true;
}

let $wfEmail = $("#wf-email");
$wfEmail.on("blur", emailCheck);//5.邮箱
function emailCheck() {
    let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    let email = $wfEmail.val();
    let $field = $wfEmail.parent(".rj-field");
    email = filterXSS(email)
    formData.email = email
    if (!reg.test(email) || email == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $("#wf-email").css("border", "1px solid red");
        // $(".wf-email-span").html("<span class='red-form'>请输入正确的邮箱</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $("#wf-email").css("border", "");
    // $(".wf-email-span").html("");
    return true;
}
let $wfIntro = $("#wf-intro");
$wfIntro.on("blur", introCheck);//6.自我介绍
function introCheck() {
    let intro = $wfIntro.val();
    let $field = $wfIntro.parent(".rj-field");
    intro = filterXSS(intro)
    formData.introduction = intro
    if (intro == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $("#wf-intro").css("border", "1px solid red");
        // $(".wf-intro-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $("#wf-intro").css("border", "");
    // $(".wf-intro-span").html("");
    return true;
}
let $wfSkills = $("#wf-skills");
$wfSkills.on("blur", skillsCheck);
function skillsCheck() {
    let skills = $wfSkills.val();
    let $field = $wfSkills.parent(".rj-field");
    skills = filterXSS(skills)
    formData.skills = skills
    if (skills == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $wfSkills.css("border", "1px solid red");
        // $(".wf-skills-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $wfSkills.css("border", "");
    // $(".wf-skills-span").html("");
    return true;
}
let $wfCog = $("#wf-cog");
$wfCog.on("blur", cogCheck);
function cogCheck() {
    let cog = $wfCog.val();
    let $field = $wfCog.parent(".rj-field");
    cog = filterXSS(cog)
    formData.idea = cog
    if (cog == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // $wfCog.css("border", "1px solid red");
        // $(".wf-cog-span").html("<span class='red-form'>不能为空！</span>");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    // $wfCog.css("border", "");
    // $(".wf-cog-span").html("");
    return true;
}
//产生验证码  
createCode();
var code; //在全局定义验证码  
//  var zlFlag = true; //用于解决使用tap事件时触发两次的bug
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度  
    var checkCode = document.getElementById("code");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
    for (var i = 0; i < codeLength; i++) { //循环操作  
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
        code += random[index]; //根据索引取得随机数加到code上  
    }
    formData.checkFront = code;
    checkCode.value = code; //把code值赋给验证码  
}
// 匹配验证码
function check() {
    let $txtCode = $("#ctl00_txtcode");     // 验证码输入框
    let $field = $txtCode.parent(".rj-field");

    var inputCode = $txtCode.val().toUpperCase();
    inputCode = filterXSS(inputCode)
    formData.checkBack = inputCode
    if (inputCode == "") {
        console.log(1)
        $field.find(".rj-field-tip").text("验证码不能为空!");
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        // alert("验证码不能为空");
        return false;
    } else if (inputCode != code) {
        // alert("验证码输入错误,请重新输入！");
        $field.find(".rj-field-tip").text("验证码输入错误,请重新输入！");
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        createCode(); //刷新验证码  
        document.getElementById("ctl00_txtcode").value = ""; //清空文本框
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    return true;
}

//$("#wf-commit").attr("disabled", true);
$("#wf-commit").on('tap', function () {
    console.log(formData)
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
        // 判断验证码是否匹配
        if (!check()) {
            return false
        } else {
            //获取到所有的表单元素并转换为数组
            var info1 = $('form').serializeArray();
            var info2 = $('.second-part-form').serializeArray();
            info1 = info1.concat(info2);
            let formData = {
                username: info[0].value,
                studentId: info[1].value,
                gradeProfessional: info[2].value,
                sex: info[3].value,
                phone: info[4].value,
                email: info[5].value,
                introduction: info[6].value,
                direction: info[7].value,
                skills: info[8].value,
                idea: info[9].value,
            }
            //在这里提交，小飞机 
            zlPlane();
        }
    }
    else {
        console.log("请正确输入信息");
    }


    //
    //关闭弹窗，动画
})
let $rjCircle = $('.rj-menu-overlay_circle');   // 打开表单的放大圆点
// 回到详情页
$('.wf-close').tap(function () {

    let $formPage = $('#zl-form-page');
    $formPage.siblings('#zl-detail-pages').fadeIn(0);
    $('#rj-steps-container').removeClass('rj-form-page2');
    $rjCircle.removeClass("rj-circle-openning");
    $('#wf-form').removeClass('rj-openning');

    // 排他
    $("#zl-detail-pages").removeClass("rj-detail-out");
    $("#zl-form-page").removeClass("rj-form-in");



    $formPage.animate({
    }, {
        duration: 1,
        easing: '',
        complete: () => {
            $formPage.fadeOut(10);
        },
        delay: 200
    })


    $('#wf-form').removeClass('zl-become-small');
    $('#wind').css({
        display: 'none'
    })
    $('.second-part').animate({ transform: 'translate(16rem)' }, 800, 'linear');
    // $('#wf-form').fadeOut(1000);
});







/**
 * 文本框根据输入内容自适应高度
 * @param                {HTMLElement}        输入框元素
 * @param                {Number}                设置光标与输入框保持的距离(默认0)
 * @param                {Number}                设置最大高度(可选)
 */

// var autoTextarea = function (elem, extra, maxHeight) {
//     extra = extra || 0;
//     var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
//     isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
//             addEvent = function (type, callback) {
//                     elem.addEventListener ?
//                             elem.addEventListener(type, callback, false) :
//                             elem.attachEvent('on' + type, callback);
//             },
//             getStyle = elem.currentStyle ? function (name) {
//                     var val = elem.currentStyle[name];

//                     if (name === 'height' && val.search(/px/i) !== 1) {
//                             var rect = elem.getBoundingClientRect();
//                             return rect.bottom - rect.top -
//                                     parseFloat(getStyle('paddingTop')) -
//                                     parseFloat(getStyle('paddingBottom')) + 'px';        
//                     };

//                     return val;
//             } : function (name) {
//                             return getComputedStyle(elem, null)[name];
//             },
//             minHeight = parseFloat(getStyle('height'));

//     elem.style.resize = 'none';

//     var change = function () {
//             var scrollTop, height,
//                     padding = 0,
//                     style = elem.style;

//             if (elem._length === elem.value.length) return;
//             elem._length = elem.value.length;

//             if (!isFirefox && !isOpera) {
//                     padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
//             };
//             scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

//             elem.style.height = minHeight + 'px';
//             if (elem.scrollHeight > minHeight) {
//                     if (maxHeight && elem.scrollHeight > maxHeight) {
//                             height = maxHeight - padding;
//                             style.overflowY = 'auto';
//                     } else {
//                             height = elem.scrollHeight - padding;
//                             style.overflowY = 'hidden';
//                     };
//                     style.height = height + extra + 'px';
//                     scrollTop += parseInt(style.height) - elem.currHeight;
//                     document.body.scrollTop = scrollTop;
//                     document.documentElement.scrollTop = scrollTop;
//                     elem.currHeight = parseInt(style.height);
//             };
//     };

//     addEvent('propertychange', change);
//     addEvent('input', change);
//     addEvent('focus', change);
//     change();
// };


// autoTextarea(document.getElementById("wf-skills"));
// autoTextarea(document.getElementById("wf-intro"));
// autoTextarea(document.getElementById("wf-cog"));
