// import imgUp from './zl-index'
import upIcon from '../../img/icon_up.png'
import 'zepto/src/touch'
import './rem'
import '../font/menu/iconfont.css'

var width = document.documentElement.clientWidth;
var rem = width / 16;
let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
let a = 1; // 切换页面时，将其置1

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

//详情页文字
//滑动往上
// !(()=>{
    // console.log(imgUp)
      // 创建提示上滑的提示图片
      let imgUp = new Image();
      let $upPromot =  $('.zl-up-promot')
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
      function distance1(classname ) {
        // let list = $(classname).find('.innerwrap').find('.innerContent');
        let box = $(classname).find('.innerwrap');
        var pos = box.position();
        console.log(a) // 2 
        box.css({
            position: 'relative',
            // top: Math.ceil(pos.top/rem - 160/rem) + 'rem',
            top: (-160 / rem)*(a - 1) + 'rem',   // 0 // -160 //320
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
            top: (-160 / rem)*(a - 1) + 'rem',
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
                    console.log('a',a);
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

    }!(() => {
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
var toggleMenu = function (e) {
    console.log('this',e);
    e.stopPropagation();
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
menuBtn.on('touchend', function (e) {
    e.stopPropagation();
});

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
        a = 1;
        console.log('endcom');
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
        console.log(3333);
        switch (downCount) {
            case 0:
                is.removeClass('height-light');
                is.eq(2).addClass('height-light');
                alldetailDiv.hide();
                fontEndeDiv.show(200);
                break;
            case 1:
                is.removeClass('height-light');
                is.eq(1).addClass('height-light');
                alldetailDiv.hide();
                andriodDiv.show(200);
                break;
            case 2:
                is.removeClass('height-light');
                is.eq(0).addClass('height-light');
                alldetailDiv.hide();
                backstageDiv.show(200);
                break;
            case 3:
                is.removeClass('height-light');
                is.eq(4).addClass('height-light');
                alldetailDiv.hide();
                merchineDiv.show(200);
                break;
            case 4:
                is.removeClass('height-light');
                is.eq(3).addClass('height-light');
                alldetailDiv.hide();
                iosDiv.show(200);
                break;
        }
    })
}

move(menu[0]);