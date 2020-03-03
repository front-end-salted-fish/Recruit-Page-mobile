import zlPlane from './zl-plane'
import rjBanner from './rj-index'
import filterXSS from 'xss'
import { academy, direction } from './myDropDown'
import tvHeader from '../../img/tv-header.png'
import './gt'
console.log(academy.selectedKey);  // 学院
console.log(direction.selectedKey); // 发展方向

// 初始化表单数据,用于发给后台的表单数据
let formData = {
    username: '', // 姓名
    studentId: '', // 学号
    academy: '', // 学院
    gradeProfessional: '', // 年级班级
    sex: '', // 性别-》默认男
    phone: '', // 手机号码
    email: '', // 邮箱
    introduction: '', // 自我介绍
    direction: '', // 选择的方向
    skills: '', // 你所掌握的技能
    idea: '', // 你对我们工作室的想法
    checkFront: '', // 前端动态生成的验证码
    checkBack: '' // 用户填写的验证码
};
/* $(".rj-boy").on('tap', function () {
    formData.sex = '女'
}) */
// import formTopImg from '../../img/form-top.jpg'
// import formBottomImg from '../../img/form-bottom.jpg'
// $('#rj-form-top').attr('src', formTopImg);
// $('#rj-form-bottom').attr('src', formBottomImg);
/* $(document).ready(function () {
    　　$('body').height($('body')[0].clientHeight);
    });//解决软键盘覆盖的问题Android---》不知道行不行哈 */
var winHeight = $(window).height(); //获取当前页面高度  
let $wfForm = $('#wf-form');
$(window).resize(function () {
    //当窗体大小变化时
    var thisHeight = $(this).height();  //窗体变化后的高度
    if (winHeight - thisHeight > 50) {
        /*
        软键盘弹出
        50是设置的阈值，用来排除其他影响窗体大小变化的因素，比如有的浏览器的工具栏的显示和隐藏
        */
        // console.log(document.activeElement.id, 'resize');
        $wfForm.scrollTop($(document.activeElement).offset().top + $wfForm.scrollTop() - 4 * rem);
        // $('body').css('height', winHeight + 'px');
    } else {
        /*
        软键盘关闭
        */
        // $('body').css('height', '100%');
    }
});//监听resize ( Android）
//------------------------------------------------------------------关注focus
$('#zl-form-page input,#zl-form-page textarea').on('click', function (e) {
    // fixedForm()
    // e.preventDefault();
    // e.stopPropagation();
});

$('#zl-form-page input,#zl-form-page textarea').on('focusout', function () {
    //失去焦点时让解除固定定位
    // relieveFixed()
});
$('.getmypart').on('tap', function () {
    $('#wf-form').animate({ transform: 'translate(0,0)' }, 800, 'liner');
    console.log('s');
})
// 让表单不溢出
function fixedForm() {
    $('body').css({
        position: 'fixed'
    });
    $('html').css({
        position: 'fixed'
    });
}
// 解除固定定位
function relieveFixed() {
    $('body').css({
        position: 'static'
    });
    $('html').css({
        position: 'static'
    });
}
// 下拉框
let $select = $('.second-part-form .form-control')
$select.click(function (e) {
    // fixedForm()
    // e.preventDefault();
    // e.stopPropagation();
})
//下拉框的值发生改变时，
$select.on('change', function () {
    // relieveFixed()
})
// 整个表单页面
$('#zl-form-page').click(function () {
    // relieveFixed()
})
//上一页下一页----------------------------------------
// $("#next-page button").on('tap', function () {
//     $("#rj-steps-container").addClass("rj-form-page2");
//     $('.second-part').animate({ transform: 'translate(0)' }, 300, 'linear').scrollTop(0);
//     $('.first-part').animate({ transform: 'translate(-16rem)' }, 300, 'linear');
// });
// $(".last-page").on('tap', function () {
//     $("#rj-steps-container").removeClass("rj-form-page2");
//     $('.first-part').animate({ transform: 'translate(0)' }, 300, 'linear').scrollTop(0);
//     $('.second-part').animate({ transform: 'translate(16rem)' }, 300, 'linear');
//     // $('.second-part').css({display: 'none'})
//     // $('.first-part').css({display: 'block'})
// });
//******************************************* 验证(在html中设置好了maxlength)
let fixbug = false;
$(".rj-form-input").on("focus", function (e) {
    let $field = $(this.parentNode);
    // console.log($field);
    if ($field[0].className === 'rj-field') {
        $field.addClass("rj-field-ready");
    }

    fixbug = false
}).on('blur', function () {
    let $field = $(this.parentNode);
    if (!$(this).val()) {
        $field.removeClass('rj-field-ready rj-field-valid rj-field-error');
    }
    fixbug = true
    // ios微信软键盘的bug解决
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        setTimeout(function () {
            if (fixbug) {
                window.scroll(0, 0);
            }
        }, 100)
    }
})
if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    $(document).click(function () {
        if (fixbug) {
            // ios微信软键盘的bug解决
            window.scroll(0, 0);
            fixbug = false
        }
    })
}

let $wfName = $("#wf-name");        // 输入名字的input框
$wfName.on("blur", nameCheck);//1.名字
function nameCheck() {
    //let reg = /^[\u4e00-\u9fa5]{2,10}$/;//2-10位中文
    let reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
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

$(".rj-gender-select").on("click", function () {
    let color = !$(this).hasClass('rj-boy') ? '#5fc7f2' : '#FF7070';
    // 波纹特效
    $(this).animate({
        "box-shadow": `0 0 30px ${color}`,
    }, {
        duration: 150,
        complete: () => {
            $(this).animate({
                "box-shadow": `0 0 30px white`,
            }, {
                duration: 150,
                complete: () => {
                    $(this).css({
                        "box-shadow": ''
                    })
                },
            })
        },
    })
    $(this).toggleClass("rj-boy rj-girl");
})

let $wfId = $("#wf-id");
$wfId.on("blur", idCheck);//2.学号
function idCheck() {
    let reg = /^\d{9,12}$/;//十位数字
    let id = $wfId.val().trim();
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
    let grade = $wfGrade.val().trim();
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
    let phone = $wfPhone.val().trim();
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
    let email = $wfEmail.val().trim();
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
    let intro = $wfIntro.val().trim();
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
    let skills = $wfSkills.val().trim();
    let $field = $wfSkills.parent(".rj-field");
    skills = filterXSS(skills)
    formData.skills = skills
    if (skills == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    return true;
}
let $wfCog = $("#wf-cog");
$wfCog.on("blur", cogCheck);
function cogCheck() {
    let cog = $wfCog.val().trim();
    let $field = $wfCog.parent(".rj-field");
    cog = filterXSS(cog)
    formData.idea = cog
    if (cog == '') {
        $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
        return false;
    }
    $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
    return true;
}
// //产生验证码  
// createCode();
// var code; //在全局定义验证码  
// function createCode() {
//     code = "";
//     var codeLength = 4; //验证码的长度  
//     var checkCode = document.getElementById("code");
//     var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
//         'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
//     for (var i = 0; i < codeLength; i++) { //循环操作  
//         var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
//         code += random[index]; //根据索引取得随机数加到code上  
//     }
//     formData.checkFront = code;
//     checkCode.value = code; //把code值赋给验证码  
// }
// // 匹配验证码
// function check() {
//     let $txtCode = $("#ctl00_txtcode");     // 验证码输入框
//     let $field = $txtCode.parent(".rj-field");
//     var inputCode = $txtCode.val().toUpperCase();
//     inputCode = filterXSS(inputCode)
//     formData.checkBack = inputCode
//     if (inputCode == "") {
//         console.log(1)
//         $field.find(".rj-field-tip").text("验证码不能为空!");
//         $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
//         // alert("验证码不能为空");
//         return false;
//     } else if (inputCode != code) {
//         // alert("验证码输入错误,请重新输入！");
//         $field.find(".rj-field-tip").text("看清楚点噢！");
//         $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-error");
//         createCode(); //刷新验证码  
//         document.getElementById("ctl00_txtcode").value = ""; //清空文本框
//         return false;
//     }
//     $field.removeClass("rj-field-ready rj-field-valid rj-field-error").addClass("rj-field-valid");
//     return true;
// }
function textTip(str, t, callBack) {
    t = t || 2000;
    var dom = document.createElement("p");
    dom.setAttribute('class', 'text-tip');
    document.body.appendChild(dom);
    var mytip = document.querySelector('.text-tip')

    mytip.style.display = "block";
    mytip.innerHTML = str;
    var tipHeight = mytip.offsetHeight;

    //文字两行或两行以上
    if ((tipHeight - 20) / 18 > 1) {
        mytip.style.width = "55%";
    }
    setTimeout(function () {
        mytip.style.display = "none";
        //mytip.parentNode.removeChild(mytip);``````````
        mytip.remove()
        if (callBack) { callBack(); }
    }, t);
}

let commitCount = 0
//$("#wf-commit").attr("disabled", true);
$("#wf-commit").on('click', function () {
    // zlPlane();// 待删除
    // return false// 待删除
    if (commitCount > 0) {
        textTip("请勿重复提交！", 1000)
    }
    //进行判断
    else {
        if (nameCheck() && idCheck() && gradeCheck() && phoneCheck() && emailCheck() && introCheck() && skillsCheck() && cogCheck()) {

            // 判断验证码是否匹配
            // if (!check()) {
                // return false
            // } else {
                //获取到所有的表单元素并转换为数组
                var info1 = $('.first-part-form').serializeArray();
                var info2 = $('.second-part-form').serializeArray();
                info1 = info1.concat(info2);
                let sex = $('.rj-gender-select').hasClass('rj-boy') ? "男" : "女"
                formData.direction = direction.selectedKey
                formData.academy = academy.selectedKey
                formData.sex = sex
                // formData = {
                //     username: info1[0].value.trim(),
                //     studentId: info1[1].value.trim(),
                //     gradeProfessional: info1[2].value.trim(),
                //     sex: sex,
                //     phone: info1[3].value.trim(),
                //     email: info1[4].value.trim(),
                //     introduction: info1[5].value.trim(),
                //     direction: info1[6].value.trim(),
                //     skills: info1[7].value.trim(),
                //     idea: info1[8].value.trim(),
                //     checkFront: info1[9].value.trim(), // 前端动态生成的验证码
                //     checkBack: info1[9].value.trim() // 用户填写的验证码 */
                // }
                // textTip('提交成功', 1000, function () {
                //     //console.log('提示框消失后，执行的回调。时间t与回调函数callBack可传可不传');
                // });
                commitCount++
                //console.log(formData)
                //在这里提交，小飞机 
            // }
        }
        else {
            let wfForm = document.getElementById('wf-form');
            textTip('请正确输入信息', 1000, function () {
                //console.log('提示框消失后，执行的回调。时间t与回调函数callBack可传可不传');
            });
            let offset =  $('.rj-field-error')[0].offsetTop//第一个错误的表单项
            $wfForm.scrollTop(offset)//使用scrollTop()方法移动页面
        }
    }
})


// API1 调用初始化函数进行初始化
$.ajax({
    url: 'api/captcha/generate',
    type: "get",
    dataType: "json",
    success: function (data) {
        // 请检测data的数据结构， 保证data.gt, data.challenge, data.success有值
        initGeetest({
          product: 'bind',
          lang: 'zh-cn',
          // 以下配置参数来自服务端 SDK
          gt: data.gt,
          challenge: data.challenge,
          offline: !data.success,
          new_captcha: true,
        }, function (captchaObj) {
          document.getElementById("").addEventListener('click', function () {
            // 模态框按钮点击确定
            captchaObj.verify();
          });
          captchaObj.onSuccess(function () {
              // 用户验证成功后，进行实际的提交行为
              var result = captchaObj.getValidate();
              $.ajax({
                url: 'api/captcha/verify',
                type: 'post',
                data: {
                  geetest_challenge: result.geetest_challenge,
                  geetest_validate: result.geetest_validate,
                  geetest_seccode: result.geetest_seccode,
                },
                dataType: "text",
                success: function(data) {
                    if(data === '') {     // 空字符串则验证失败
                      captchaObj.reset(); // 调用该接口进行重置
                    } else {
                      formData.captchaToken = data;  // 获取到token
                      // TODO: 在此发送报名信息，然后飞机
                      //   ajax
                      zlPlane();

                    }
                }
              })
          })
        })
    }
  })



let $rjCircle = $('.rj-menu-overlay_circle');   // 打开表单的放大圆点

export let closeForm = function () {
    commitCount = 0//count清零
    let $formPage = $('#zl-form-page');
    $formPage.siblings('#zl-detail-pages').fadeIn(0);
    $('#rj-steps-container').removeClass('rj-form-page2');
    $rjCircle.removeClass("rj-circle-openning");
    $('#wf-form').removeClass('rj-openning').scrollTop(0);
    if (!rjBanner.isInDetailPage && rjBanner.isStopping) rjBanner.start();
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
    // $('.second-part').animate({ transform: 'translate(16rem)' }, 800, 'linear');
    // $('#wf-form').fadeOut(1000);
    $('#rj-form-header').removeClass('rj-form-header-show');
    $(document.activeElement).blur();

}
// 回到详情页
$('.wf-close').on("click", closeForm);



// 表单点击红色 x 清空内容
$('.rj-icon-error').on("click", function () {
    let field = $(this).parent('.rj-field');
    if (!field.hasClass('rj-field-error')) return;
    $(this).siblings('.rj-form-input').val('');
    field.removeClass('rj-field-error');
});

// 字体计数器
class textCounter {
    constructor({ selector, maxLen }) {
        this.selector = selector;
        this.maxLen = maxLen;
        this.rows = selector.attr('rows');
    }
    init() {
        let $counter = $(`
            <div class="rj-text-counter" style="top:${this.rows - 1}.2rem"><span class="rj-current-cnt">0</span>/<span class="rj-total-cnt">${this.maxLen}</span></div>
        `);
        this.selector.after($counter);
        this.currentCntSpan = $counter.find('.rj-current-cnt');
        // console.log(this.currentCntSpan);
        let that = this;
        this.currentCnt = this.currentCntSpan.text();  // 当前字数
        this.countEvent = function (e) {
            let length = $(e.target).val().length > 200 ? 200 : $(e.target).val().length;
            that.currentCntSpan.text(length);
        }
        this.selector.on('input', this.countEvent);
    }
}
(new textCounter({
    selector: $('#wf-intro'),
    maxLen: 200
})).init();
(new textCounter({
    selector: $('#wf-skills'),
    maxLen: 100
})).init();
(new textCounter({
    selector: $('#wf-cog'),
    maxLen: 100
})).init();

// 打开表单的时候获取
let wfForm = document.getElementById('wf-form');
let imgWidth = $(window).width() - 50;
let $header = $('#rj-form-header');
let $wfClose = $('.wf-close');
let rem = document.documentElement.clientWidth / 16;
$wfForm.on('scroll', function () {
    let scrollTop = $wfForm.scrollTop();
    if (imgWidth < scrollTop) {
        if (!$header.hasClass('rj-form-header-show')) $header.addClass('rj-form-header-show');
        if (!$wfClose.hasClass('__change')) $wfClose.addClass('__change');
        $('#rj-form-progress-bar').css('transform', `scaleX(${scrollTop / (wfForm.scrollHeight - wfForm.clientHeight)})`)
    } else {
        $wfClose.removeClass('__change');
        $header.removeClass('rj-form-header-show');
    }
});

// 安卓表单空间聚焦自动滚动到合适位置
if (/Android/.test(navigator.appVersion)) {
    // $('.rj-form-input').on('focus', function (e) {
    // $wfForm.scrollTop($(e.target).offset().top + $wfForm.scrollTop() - 4 * rem);
    // });
    $('#mq-production').css('font-weight', 'lighter');
}
// 聚焦校准
$wfForm.on('tap', function (t) {
    if ($(t.target).hasClass('rj-form-input')) {
        $(t.target).focus();
    }
})

// 表单图片
$('#rj-tv-header').attr('src', tvHeader)
