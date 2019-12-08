import 'zepto/src/touch'
import './rem'
import '../font/menu/iconfont.css'

var MOVE_DIS = 20;
var menu = $('#cf-menu');
var btnWrap = $('#cf-menu .move-wrap')
var menuBtns = $('#cf-menu .move-wrap').children();
var is = $('#cf-menu .move-wrap i');
var curtain = $('.curtain');
var menuBtn = $('#cf-menu .menu-btn');
//详情页
var alldetailDiv = $('#mq-production>div');
var fontEndeDiv = $('#mq-frontEnd');
var backstageDiv = $('#mq-backend');
var merchineDiv = $('#mq-machineLearning');
var iosDiv = $('#mq-ios');
var andriodDiv = $('#mq-android');
console.log('all',fontEndeDiv);
var rotateTimes = 0;
// 旋转菜单
function rotateFn(nodes, originNode) {
    var radio = 360 / nodes.length;
    var deg = 57.2;
    var r = $('.move-wrap').width() / 2;
    console.log(originNode[0].clientWidth);
    console.log('r', r);
    nodes.each(function (index, item) {
        console.log(radio);
        var top = Math.sin((36 + index * radio) / deg) * r * 0.8 + r;
        var left = Math.cos((36 + index * radio) / deg) * r * 0.8 + r;

        console.log('top', top, 'left', left, 'deg', Math.sin(36), 'deg', 36 + index * radio);
        $(item).css({
            top: top,
            left: left
        })
    })
}

//防抖
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

var menu_timer;
//menu btn
var toggleMenu = function () {

    var currentRotateDeg = rotateTimes * 72;
    console.log('currentRotateDeg', currentRotateDeg);
    console.log('ismenu',$(this).find('i'));
    if($(this).find('i').hasClass('icon-caidan')){
        btnWrap.css('transform', 'rotate(' + (currentRotateDeg - 72*5) + 'deg)');
    }
    if (menu_timer) {
        return false
    } else {
        var that = this;
        menu_timer = setTimeout(function () {
            console.log(that);
            var i = $(that).find('i');
            if (i.hasClass('icon-caidan')) {
                curtain.show();
                i.removeClass();
                i.addClass('iconfont icon-guanbi');
                btnWrap.css('transform', 'rotate(' + currentRotateDeg  + 'deg)');
                btnWrap.css('opacity', 1)
            } else if (i.hasClass('icon-guanbi')) {
                curtain.hide();
                i.removeClass();
                i.addClass('iconfont icon-caidan');
                btnWrap.css('transform', 'rotate(' + currentRotateDeg +72*5 + 'deg)');
                btnWrap.css('opacity', 0);
            }
            menu_timer = undefined
        }, 200)
    }
};
menuBtn.on('touchstart', toggleMenu);


rotateFn(menuBtns, btnWrap);

//menu move function
function move(node) {
    var startDeg = 0;
    var startY = 0;
    var downCount = 0;
    // 在元素中保存开始位置
    node.addEventListener('touchstart', function (e) {
        e = e || window.event;
        // 获取目标事件手指
        var touch = e.changedTouches[0];
        startY = touch.clientY;
    });
    node.addEventListener('touchend', function (e) {
        var isOpacity = btnWrap.css('opacity');
        // console.log('opacity',isOpacity);
        if(isOpacity === '0') {
            return false;
        }
        menuBtns = $('#cf-menu .move-wrap').children();
        console.log('end');
        e = e || window.event;
        // 获取目标事件手指
        var touch = e.changedTouches[0];
        var endY = touch.clientY;
        var disY = startY - endY;
        // 判断是上滑还是下滑
        if (disY > 0 && disY >= MOVE_DIS) {
            // 记录旋转次数
            rotateTimes++;
            if (downCount === 4) {
                downCount = 0;
            } else {
                downCount++;
            }
            startDeg += 72;
            btnWrap.css({
                transform: 'rotate(' + startDeg + 'deg)'
            });
            is.css({
                transform: 'rotate(' + (-startDeg) + 'deg)'
            });

        }
        if (disY < 0 && disY <= -MOVE_DIS) {
            rotateTimes--;
            if (downCount === 0) {
                downCount = 4
            } else {
                downCount--;
            }
            startDeg -= 72;
            btnWrap.css({
                transform: 'rotate(' + startDeg + 'deg)'
            });
            is.css({
                transform: 'rotate(' + (-startDeg) + 'deg)'
            });
        }
        switch (downCount) {
            case 0:
                is.removeClass('height-light');
                is.eq(2).addClass('height-light');
                alldetailDiv.hide();
                fontEndeDiv.show(200);
                mqObj.a = 1;
                mqObj.swipeD(mqObj.firstId);
                mqObj.swipeU(mqObj.firstId);
                console.log(mqObj.a);
                break;
            case 1:
                is.removeClass('height-light');
                is.eq(1).addClass('height-light');
                alldetailDiv.hide();
                andriodDiv.show(200);
                mqObj.a = 1;
                mqObj.swipeD(mqObj.thirdId);
                mqObj.swipeU(mqObj.thirdId);
                console.log(mqObj.a);
                break;
            case 2:
                is.removeClass('height-light');
                is.eq(0).addClass('height-light');
                alldetailDiv.hide();
                backstageDiv.show(200);
                mqObj.a = 1;
                mqObj.swipeD(mqObj.secondId);
                mqObj.swipeU(mqObj.secondId);
                console.log(mqObj.a);
                break;
            case 3:
                is.removeClass('height-light');
                is.eq(4).addClass('height-light');
                alldetailDiv.hide();
                merchineDiv.show(200);
                mqObj.a = 1;
                mqObj.swipeD(mqObj.lastId);
                mqObj.swipeU(mqObj.lastId);
                console.log(mqObj.a);
                break;
            case 4:
                is.removeClass('height-light');
                is.eq(3).addClass('height-light');
                alldetailDiv.hide();
                iosDiv.show(200);
                a = 1;
                mqObj.swipeD(mqObj.fourthId);
                mqObj.swipeU(mqObj.fourthId);
                console.log(mqObj.a);
                break;
        }
    })
}

move(menu[0]);