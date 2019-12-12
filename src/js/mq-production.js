// import imgUp from './zl-index'
import upIcon from '../../img/icon_up.png'
// import 'zepto/src/zepto'
import './rem'
import '../font/menu/iconfont.css'
import functionCaller from "less/lib/less/functions/function-caller";

var width = document.documentElement.clientWidth;
var rem = width / 16;
let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
let a = 1; // 切换页面时，将其置1

let MOVE_DIS = 20; //滑动距离
let menu = $('#cf-menu');//菜单盒子
var btnWrap = $('#cf-menu .move-wrap');// 按钮盒子
var menuBtns = $('#cf-menu .move-wrap').children();//按钮集合
var is = $('#cf-menu .move-wrap i'); //icons集合
var curtain = $('.curtain'); // 幕布
var menuBtn = $('#menu-wrap .menu-btn'); //菜单按钮
var iscomputePos = true; // 是否需要计算
//详情页
var alldetailDiv = $('#mq-production>div');
var fontEndeDiv = $('#mq-frontEnd');
var backstageDiv = $('#mq-backend');
var merchineDiv = $('#mq-machineLearning');
var iosDiv = $('#mq-ios');
var andriodDiv = $('#mq-android');
console.log('all', fontEndeDiv);
var rotateTimes = 0;

//详情页文字
//滑动往上
// !(()=>{
// console.log(imgUp)
// 创建提示上滑的提示图片
let imgUp = new Image();
let $upPromot = $('.zl-up-promot');
imgUp.src = upIcon;

$(imgUp).css({
    height: "auto",
    width: "25px",
    position: "absolute",
    left: "50%",
    top: "93%",
    marginLeft: "-12px"
})
$(imgUp).addClass('page-moveIconUp')
$upPromot.append(imgUp);

function distance1(classname) {
    // let list = $(classname).find('.innerwrap').find('.innerContent');
    let box = $(classname).find('.innerwrap');
    var pos = box.position();
    console.log(a) // 2
    box.css({
        position: 'relative',
        // top: Math.ceil(pos.top/rem - 160/rem) + 'rem',
        top: (-160 / rem) * (a - 1) + 'rem',   // 0 // -160 //320
        // opacity: 1,
        // left: pos.left
    });
}

function distance2(classname) {
    let box = $(classname).find('.innerwrap');
    var pos = box.position();
    console.log(a)
    box.css({
        position: 'relative',
        // top: Math.ceil(pos.top/rem + 160/rem)+'rem',
        top: (-160 / rem) * (a - 1) + 'rem',
        // left: pos.left
    });
    $(imgUp).show();
}

function swipeU(classname) {
    $(classname).swipeUp(
        function () {
            console.log('执行了')

            let list = $(classname).find('.innerContent');
            let box = $(classname).find('.innerwrap');
            var pos = box.position();
            $(classname).find('.innerwrap').find('.innerContent').each(function (item, index) {
                $(this).removeClass('opa1');
            });

            // if (box.position().top / rem >= -640 / rem) {

            switch (++a) {
                case 2:
                    $(list[1]).addClass('opa');
                    distance1(classname)
                    break;
                case 3:
                    // box.addClass('opa');

                    console.log($(list[1]));
                    $(list[2]).addClass('opa');
                    distance1(classname)
                    break;
                case 4:
                    $(list[3]).addClass('opa');
                    // console.log(list[2]);
                    distance1(classname)
                    break;
                case 5:
                    $(list[4]).addClass('opa');
                    // console.log(list[3]);
                    distance1(classname)
                    break;
                case 6:
                    $(list[5]).addClass('opa');
                    // console.log(list[4]);
                    distance1(classname)
                    $(imgUp).hide();
                    break;
                default:
                    a = 6;
                    break;
            }
            // }
            console.log('a', a);
        }
    )
}

!(() => {
    swipeU(firstId)
    swipeU(secondId)
    swipeU(thirdId)
    swipeU(fourthId)
    swipeU(lastId)
})();
// })();
//滑动往下

function swipeD(classname) {

    $(classname).swipeDown(
        function () {
            let list = $(classname).find('.innerContent');
            let box = $(classname).find('.innerwrap');
            var pos = box.position();
            // console.log(pos.top);
            $(classname).find('.innerwrap').find('.innerContent').each(function (item, index) {
                $(this).removeClass('opa');
            });

            // if (box.position().top / rem <= -160 / rem) {

            switch (a--) {
                case 6:
                    // list.each(function(item,index){
                    //     $(this).removeClass('opa');
                    // });
                    $(list[4]).addClass('opa1');
                    distance2(classname)
                    break;
                case 5:
                    $(list[3]).addClass('opa1');
                    distance2(classname)
                    break;
                case 4:
                    // box.addClass('opa');
                    // console.log($(list[1]));
                    $(list[2]).addClass('opa1');
                    distance2(classname)
                    console.log(1);
                    break;
                case 3:
                    $(list[1]).addClass('opa1');
                    distance2(classname)
                    // console.log(list[2]);
                    break;
                case 2:
                    $(list[0]).addClass('opa1');
                    distance2(classname)
                    // console.log(list[3]);
                    break;
                case 1:
                    $(list[0]).addClass('opa1');
                    a = 1;
                    distance2(classname)
                    // console.log(list[4]);
                    break;
                default:
                    a = 1;
                    break;
            }
            // }

        }
    )

}

!(() => {
    swipeD(firstId)
    swipeD(secondId)
    swipeD(thirdId)
    swipeD(fourthId)
    swipeD(lastId)

})();
// })();
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         let context = this;
//         let args = arguments;

//         if (timeout) clearTimeout(timeout);

//         timeout = setTimeout(() => {
//             func.apply(context, args)
//         }, wait);
//     }
// // }
// // // content.onmousemove = debounce(count,1000);

// 计算旋转按钮位置
function rotateFn(nodes) {
    var radio = 360 / nodes.length;
    var r = $('.move-wrap').width() / 2;
    nodes.each(function (index, item) {
        console.log(radio);
        var top = Math.sin((36+ 144 + index * radio) * Math.PI / 180) * r * 0.75 + r;
        var left = Math.cos((36 + 144+index * radio) * Math.PI / 180) * r * 0.75 + r;

        $(item).css({
            top: top,
            left: left
        })
    })
}

// 计算圆心角
function computeDeg(xa, ya, xb, yb) {

    var xc = parseInt($('#menu-wrap').css('left'));
    var yc = parseInt($('#menu-wrap').css('top'));
    xc += parseInt($('#menu-wrap').css('width')) / 2;
    yc += parseInt($('#menu-wrap').css('width')) / 2;
    var c2 = Math.abs(xa - xb) ^ 2 + Math.abs(ya - yb) ^ 2;
    var b2 = Math.abs(xa - xc) ^ 2 + Math.abs(ya - yc) ^ 2;
    var a2 = Math.abs(xb - xc) ^ 2 + Math.abs(yb - yc) ^ 2;
    var a = Math.sqrt(a2);
    var b = Math.sqrt(b2);
    var c = Math.sqrt(c2);
    var cos = (a2 + b2 - c2) / (2 * a * b);
    var cDeg = Math.acos(cos);
    console.log('xa', xa, 'ya', ya, 'xb', xb, 'yb', yb, 'a', a, 'b', b, 'c', c, 'c2', c2, 'b2', b2, 'c2', c2, 'cos', cos, 'deg', cDeg);
    return cDeg;
}

//防抖函数
function debounce(fn, wait) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}

//防抖定时器
// var menu_timer;
// 滑动事件函数
let toggleMenu = function (e) {
    e.stopPropagation();
    var currentRotateDeg = rotateTimes * 72;
    var that = this;
    console.log(this, 'this', e, 'e');
    var i = $(that).find('i');
    if (i.hasClass('icon-caidan')) {
        curtain.show();
        i.removeClass();
        i.addClass('iconfont icon-guanbi');
        menu.show();
        menu.css('opacity', 0);
        if (iscomputePos) {
            rotateFn(menuBtns, btnWrap);
            iscomputePos = false;
        }
        menu.css('opacity', 1);
        btnWrap.css('transform', 'rotate(' + (currentRotateDeg - 72 * 4) + 'deg)');
        btnWrap.animate({
                transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
                transform: 'rotate(' + (currentRotateDeg) + 'deg)'
            },
            {duration: 300}
        )
    } else if (i.hasClass('icon-guanbi')) {
        curtain.hide();
        i.removeClass();
        i.addClass('iconfont icon-caidan');
        btnWrap.animate({
                transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
                transform: 'rotate(' + (currentRotateDeg + 72 * 4) + 'deg)'
            },
            {
                duration: 300, complete: function () {
                    btnWrap.css('transform', 'rotate(' + (currentRotateDeg) + 'deg)');
                    menu.hide();
                }
            }
        );
    }
};
menuBtn.on('tap', debounce(toggleMenu, 300));
menuBtn.on('touchend', function (e) {
    e.stopPropagation();
});
let startDeg = 0;
let downCount = 0;
let startY = 0;

//menu move function
function move(node) {
    // 开始位置
    let xa;
    let ya;
    // 在元素中保存开始位置
    node.addEventListener('touchstart', function (e) {
        e = e || window.event;
        var touch = e.changedTouches[0];
        // console.log('xa', touch.clientX, 'ya', touch.clientY);
        xa = touch.clientX;
        ya = touch.clientY;
        // var xast = touch.clientX.replace("px","");
        // var yast = touch.clientY.replace("px","");
        // console.log('xa',xa, 'ya', ya,'xast',touch.clientX,'yast',touch.clientY);
        startY = touch.clientY;
    });
    node.addEventListener('touchend', debounce(cfMoveFn, 300))
}

let cfMoveFn = (e) => {
    a = 1;
    e = e || window.event;
    var touch = e.changedTouches[0];
    // console.log('xb', touch.clientX, 'yb', touch.clientY);
    // 触摸坐标
    var xb = touch.clientX;
    var yb = touch.clientX;
    // 计算要偏转的角度
    // console.log(xa,ya,xb,yb);
    // var rotateDeg = computeDeg(xa, ya, xb, yb);
    // console.log('rotateDeg', rotateDeg);
    var isOpacity = btnWrap.css('opacity');
    menuBtns = $('#cf-menu .move-wrap').children();
    // 获取目标事件手指
    var endY = touch.clientY;
    var disY = startY - endY;
    // 判断是上滑还是下滑
    if (disY > 0 || Math.abs(MOVE_DIS) > 20) {
        // 记录旋转次数
        rotateTimes++;
        if (downCount === 0) {
            downCount = 4
        } else {
            downCount--;
        }
        startDeg += 72;
        // console.log('shanghua', downCount, startDeg);

        btnWrap.animate({
            transform: 'rotate(' + startDeg + 'deg)',
            // transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s'
        });
        // is.css({
        //     transform: 'rotate(' + (-startDeg) + 'deg)'
        // });

    }
    if (disY < 0 || Math.abs(MOVE_DIS) < 20) {
        rotateTimes--;

        if (downCount === 4) {
            downCount = 0;
        } else {
            downCount++;
        }
        startDeg -= 72;
        // console.log('xiahua', downCount, startDeg);

        btnWrap.animate({
            transform: 'rotate(' + startDeg + 'deg)',
        });
    }
    if (Math.abs(disY) < MOVE_DIS) {
        return false
    }
    // $('current-page').animate({
    //         // display: 'block',
    //         position: 'absolute',
    //         left: '-100vw',
    //         transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s'
    //     }, {
    //         duration: 300,
    //         compute: function () {
    //             $('current-page').hide().removeClass('current-page');
    //         }
    //     }
    // );
    alldetailDiv.css({
        display: 'block',
        position: 'absolute',
        left: disY > 0 ? '100vw' : '-100vw',
    }).removeClass('current-page');
    console.log('downcount',downCount);
    switch (downCount) {
        case 0:
            is.removeClass('height-light');
            is.eq(0).addClass('height-light');
            //显示下一张详情页
            fontEndeDiv.animate({
                    // display: 'block',
                    position: 'absolute',
                    left: '0vw',
                    transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s'
                }, {
                    duration: 300,
                    compute: function () {
                        fontEndeDiv.css('display', 'block').addClass('current-page');
                    }
                }
            );
            break;
        case 1:
            is.removeClass('height-light');
            is.eq(1).addClass('height-light');
            merchineDiv.animate({
                    // display: 'block',
                    position: 'absolute',
                    left: '0vw',
                    transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s'
                }, {
                    duration: 300,
                    compute: function () {
                        andriodDiv.addClass('current-page');
                    }
                }
            );
            break;
        case 2:
            is.removeClass('height-light');
            is.eq(2).addClass('height-light');
            iosDiv.animate({
                    // display: 'block',
                    position: 'absolute',
                    left: '0vw',
                    transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s'
                }, {
                    duration: 300,
                    compute: function () {
                        backstageDiv.addClass('current-page');
                    }
                }
            );
            break;
        case 3:
            is.removeClass('height-light');
            is.eq(3).addClass('height-light');
            andriodDiv.animate({
                    // display: 'block',
                    position: 'absolute',
                    left: '0vw',
                    transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s'
                }, {
                    duration: 300,
                    compute: function () {
                        merchineDiv.addClass('current-page');
                    }
                }
            );
            break;
        case 4:
            is.removeClass('height-light');
            is.eq(4).addClass('height-light');
            backstageDiv.animate({
                    // display: 'block',
                    position: 'absolute',
                    left: '0vw',
                    transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s'
                }, {
                    duration: 300,
                    compute: function () {
                        iosDiv.addClass('current-page');
                    }
                }
            );
            break;
    }
};
move(curtain[0]);
move(menu[0]);
//点击幕布关闭
curtain.on('tap', function () {
    var i = $('.menu-btn i');
    curtain.hide();
    i.removeClass();
    i.addClass('iconfont icon-caidan');
    btnWrap.css('transform', 'rotate(' + (currentRotateDeg + 72 * 9) + 'deg)');
    menu.css('opacity', 0);
    menu.hide();
});