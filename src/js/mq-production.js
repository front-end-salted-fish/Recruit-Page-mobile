// import imgUp from './zl-index'
//锐基的代码
// import testImg1 from '../../img/rj-banner-test.jpg'
// import testImg2 from '../../img/rj-banner-test2.jpg'
// import testImg3 from '../../img/rj-banner-test3.jpg'
// import testImg4 from '../../img/rj-banner-test.jpg'
// import testImg5 from '../../img/rj-banner-test2.jpg'
// import 'zepto'
// import 'zepto/src/fx'
// import 'zepto/src/fx_methods'
//我的我的
import upIcon from '../../img/icon_up.png'
// import 'zepto/src/zepto'
import './rem'
import '../font/menu/iconfont.css'
import functionCaller from "less/lib/less/functions/function-caller";
//锐基的
// let $banner = $("#rj-banner"); // 获取整个轮播页面
// let $bannerContainer = $("#rj-banner-container"); // 获取轮播图容器
// let $bannerPages = $(".rj-banner-page");  // 每个轮播页
// let $bannerImgs = $(".rj-banner-page img");    // 每个轮播页的图片
// let $bannerBtnUl = $("#rj-banner-btns");  // 按钮ul
// let $bannerBtns = $bannerBtnUl.find(".rj-banner-btn"); // 轮播图按钮
// let $nextBannerBtn = $("#rj-next"); // 下一页按钮
// let $preBannerBtn = $("#rj-prev"); // 上一页按钮
// let $fontsContainer = $('#rj-fonts-container'); // 文字存储框
// let $detailPages = $('#mq-production').children(); // 获取详情页
// let $whiteCur = $('#rj-white-curtain');  // 切换时的白色幕布
// let $spans = $('#rj-3d-tv').find('span'); // 轮播图TopView 字样
// let $rjBackBtn = $('.zl-back-btn'); // 从详情页返回轮播图的按钮
// // 翻页节流共享previous
// let previous = 0;
// let canBack = false;  // 是否可以返回轮播图（因为存在动画还没结束就点击按钮的情况）




//我的我的
var width = document.documentElement.clientWidth;
var rem = width / 16;
let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
let a = 1;
let MOVE_DIS = 20; //滑动距离
let menu = $('#cf-menu'); //菜单盒子
var btnWrap = $('#cf-menu .move-wrap'); // 按钮盒子
var menuBtns = $('#cf-menu .move-wrap').children(); //按钮集合
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
let $upPromot = $('.zl-up-promot')
imgUp.src = upIcon;
// console.log(tag);

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
        top: (-200 / rem) * (a - 2) + 'rem', // 0 // -160 //320
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
        top: (-200 / rem) * (a - 2) + 'rem',
        // left: pos.left
    });
    $(imgUp).show();
}
//滑动向上
function swipeU(classname) {
    $(classname).swipeUp(

        function () {
            console.log('执行了')
            let title = $(classname).find('.title');
            let span = $(classname).find('.title').find('span');
            let sup = $(classname).find('.title').find('sup');
            let list = $(classname).find('.innerContent');
            let box = $(classname).find('.innerwrap');
            var pos = box.position();
            // $(classname).find('.innerwrap').find('.innerContent').each(function (item, index) {
            //     // $(this).removeClass('opa1');
            //     $(this).css({
            //         opacity: '0'
            //     })
            // });
            $(classname).find('.innerwrap').find('.innerContent').eq(0).css({
                opacity: '0'
            })




            // sup.css({
            //     transform: "scale(1.5)",
            // })


            // if (box.position().top / rem >= -640 / rem) {

            switch (++a) {
                case 2:
                    title.css({
                        top: "1rem",
                        left: "-2.5rem",
                        textAlign: "start",
                        transform: "scale(.5)",
                    })

                    // span.css({
                    //     transform: "scale(.5)",
                    //     paddingLeft: ".5rem"
                    // })
                    // sup.css({
                    //     fontSize: ".5rem",
                    //     top: "-.8rem",
                    //     left:'2.5rem'
                    // })
                    // $(list[0]).addClass('opa');
                    $(list[0]).css({
                        opacity: '1'
                    })
                    // $(list[1]).addClass('opa');
                    // distance1(classname)
                    break;
                case 3:
                    // box.addClass('opa');
                    console.log("没没没")
                    console.log($(list[1]));
                    distance1(classname)
                    // $(list[0]).removeClass('opa');
                    $(list[0]).css({
                        opacity: '0'
                    })
                    // $(list[1]).addClass('opa');
                    $(list[1]).css({
                        opacity: '1'
                    })

                    break;
                case 4:
                    $(list[1]).css({
                        opacity: '0'
                    })
                    $(list[2]).css({
                        opacity: '1'
                    })
                    // $(list[1]).removeClass('opa');
                    // $(list[2]).addClass('opa');
                    // console.log(list[2]);
                    distance1(classname)
                    break;
                case 5:
                    $(list[2]).css({
                        opacity: '0'
                    })
                    $(list[3]).css({
                        opacity: '1'
                    })
                    // $(list[2]).removeClass('opa');
                    // $(list[3]).addClass('opa');
                    // console.log(list[3]);
                    distance1(classname)
                    // $(imgUp).hide();
                    break;
                    // case 6:
                    //     $(list[5]).addClass('opa');
                    //     // console.log(list[4]);
                    //     distance1(classname)
                    //     $(imgUp).hide();
                    //     break;
                case 6:
                    $(list[3]).css({
                        opacity: '0'
                    })
                    $(list[4]).css({
                        opacity: '1'
                    })

                    // $(list[3]).removeClass('opa');
                    // $(list[4]).addClass('opa');
                    // console.log(list[3]);
                    distance1(classname)
                    $(imgUp).hide();
                    break;
                default:
                    a = 6;
                    // $(list[4]).css({
                    //     opacity: '1'
                    // })
                    break;
            }
            // }
            console.log('a', a);
        }
    )
}!(() => {
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
            console.log(a);

            console.log("执行了1111")
            let title = $(classname).find('.title');
            let list = $(classname).find('.innerContent');
            let box = $(classname).find('.innerwrap');
            var pos = box.position();
            // console.log(pos.top);   
            $(classname).find('.innerwrap').find('.innerContent').eq(4).css({
                opacity: '0'
            })


            // if (box.position().top / rem <= -160 / rem) {

            switch (a--) {
                case 6:
                    // list.each(function(item,index){
                    //     $(this).removeClass('opa');
                    // });
                    console.log(1);

                    distance2(classname)
                    $(list[4]).css({
                        opacity: '0'
                    })
                    $(list[3]).css({
                        opacity: '1'
                    })
                    // $(list[3]).addClass('opa1');
                    // $(list[3]).addClass('opa1');
                    // console.log(1111111111)

                    break;
                case 5:
                    console.log(2);
                    $(list[3]).css({
                        opacity: '0'
                    })
                    $(list[2]).css({
                        opacity: '1'
                    })
                    // $(list[3]).removeClass('opa1');
                    // $(list[2]).addClass('opa1');
                    distance2(classname)
                    break;
                case 4:
                    console.log(3);
                    // box.addClass('opa');
                    // console.log($(list[1]));
                    $(list[2]).css({
                        opacity: '0'
                    })
                    $(list[1]).css({
                        opacity: '1'
                    })
                    // $(list[2]).removeClass('opa1');
                    // $(list[1]).addClass('opa1');
                    distance2(classname)
                    console.log(1);
                    break;
                case 3:
                    console.log("哈哈哈哈哈哈");
                    console.log(1111111111111);

                    $(list[1]).css({
                        opacity: '0'
                    })
                    $(list[0]).css({
                        opacity: '1'
                    })
                    
                    // $(list[1]).removeClass('opa1');
                    // $(list[0]).addClass('opa1');

                    distance2(classname)
                    // a = 3;
                    // console.log(list[2]);
                    break;
                    case 2:
                        $(list[0]).css({
                            opacity: '1'
                        })
                        // title.css({
                        //     top: "1rem",
                        //     left: "-2.5rem",
                        //     textAlign: "start",
                        //     transform: "scale(.5)",
                        // })
                        // console.log(list[3]);
                        break;
                    // case 1:
                    //     $(list[0]).addClass('opa1');
                    //     a = 1;
                    //     distance2(classname)
                    //     // console.log(list[4]);
                    //     break;
                default:
                    a = 1;
                    console.log(5);
                    // $(list[0]).css({
                    //     opacity: '1'
                    // })
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

// 计算旋转按钮位置
function rotateFn(nodes) {
    var radio = 360 / nodes.length;
    var r = $('.move-wrap').width() / 2;
    nodes.each(function (index, item) {
        console.log(radio);
        var top = Math.sin((36 + 144 + index * radio) * Math.PI / 180) * r * 0.75 + r;
        var left = Math.cos((36 + 144 + index * radio) * Math.PI / 180) * r * 0.75 + r;

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
let currentRotateDeg = 0;
// 滑动事件函数
let toggleMenu = function (e) {
    e.stopPropagation();
    currentRotateDeg = rotateTimes * 72;
    let that = this;
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
        }, {
            duration: 300
        })
    } else if (i.hasClass('icon-guanbi')) {
        curtain.hide();
        i.removeClass();
        i.addClass('iconfont icon-caidan');
        btnWrap.animate({
            transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
            transform: 'rotate(' + (currentRotateDeg + 72 * 4) + 'deg)'
        }, {
            duration: 300,
            complete: function () {
                btnWrap.css('transform', 'rotate(' + (currentRotateDeg) + 'deg)');
                menu.hide();
            }
        });
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
    // node.addEventListener('touchend', 
    node.addEventListener('touchend', debounce(cfMoveFn, 300));




}

let cfMoveFn = (e) => {
    //重置1，并且恢复各组第一次的样子，防止圆盘滑动的时候触发滑动事件
    a = 1;
    let box = $('.innerwrap');
    let boxContent = $('.innerContent');
    let title = $('.title');
    box.each(function (item, index) {
        $(this).css({
            top: '0',
            // opacity: "0"
        })
    })
    boxContent.each(function (item, index) {
        $(this).css({
            // top: '0',
            opacity: "0"
        })
    })
    title.css({
        // opacity: 1;
        position: "absolute",
        top: "20%",
        left: "0",
        transform: 'scale(1)',
        // left: 10%;
        // width: 380/@rem;
        // height: 160/@rem;
        textAlign: "center"
        // transition: all 1s;
    })
    // box.find(".innerContent").eq(0).css({
    //     opacity: "0"
    // })
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
    console.log('downcount', downCount);
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
            });
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
            });
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
            });
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
            });
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
            });
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
    btnWrap.animate({
        transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
        transform: 'rotate(' + (currentRotateDeg + 72 * 4) + 'deg)'
    }, {
        duration: 300,
        complete: function () {
            btnWrap.css('transform', 'rotate(' + (currentRotateDeg) + 'deg)');
            menu.hide();
        }
    });
});




//锐基的代码
// 轮播图对象
// let rjBanner = {
//   nowPageIndex: 0, // 正在播放的轮播图的index值
//   timer: undefined, // 轮播图控制器
//   bannerTotalTime: 4000, // 动画时间+阅读时间
//   bannerWatchTime: 1500, // 阅读时间
//   bannerMoveTime: 2500, // 动画时间
//   hasStart: false,
//   isStopping: true,
//   // 用户正在阅读的页码
//   watchPageIndex: undefined,
//   // 存放位置类名的数组
//   pagesPosClassArr: ["rj-pre-page", "rj-mid-page", "rj-next-page"],
//   // 存放图片链接的数组
//   imgSrc: [testImg1, testImg2, testImg3, testImg4, testImg5,],
//   // 中文字体的数组
//   cTxtArr: ["前端", "后台", "安卓", "iOS", "机器学习"],
//   // 英文字体的数组
//   eTxtArr: ["Front-end", "Back-end", "Android", "", "Machine-learning"],
//   // 初始化函数
//   init() {
//     $bannerImgs[1].src = testImg1;
//     this.setPosClass();
//     // TopView 字样反转
//     $.each($spans, function (index, item) {
//       $(item).animate({
//         transform: 'rotate3d(0,1,0,720deg)'
//       }, {
//         duration: 3000,
//         easing: 'cubic-bezier(.5,.52,0,1)',
//         delay: (index) * 200
//       });
//     });
//   },
//   // 位置class的重置
//   setPosClass() {
//     for (let i = 0; i < $bannerPages.length; i++) {
//       $($bannerPages[i]).removeClass("rj-pre-page rj-mid-page rj-next-page")
//         .addClass(this.pagesPosClassArr[i]);
//     }
//   },
//   // 清除动画class
//   clearMoveClass() {
//     for (let i = 0; i < $bannerPages.length; i++) {
//       $($bannerPages[i]).removeClass("rj-banner-out-to-left rj-banner-in-from-right rj-banner-out-to-right rj-banner-in-from-left");
//     }
//   },
//   // 文字滑入
//   txtIn(dirFrom, cTxt, eTxt) {
//     let that = this;
//     let trueIndex;
//     let cTxtHtml = '';
//     let eTxtHtml = '';
//     for (let i = 0; i < cTxt.length; i++) {
//       cTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${cTxt[i]}</span>`;
//     }
//     for (let i = 0; i < eTxt.length; i++) {
//       eTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${eTxt[i]}</span>`;
//     }
//     $fontsContainer.find('.rj-c-txt.rj-txt-next').append(cTxtHtml);
//     $fontsContainer.find('.rj-e-txt.rj-txt-next').append(eTxtHtml);
//     let $txt = $('#rj-fonts-container .rj-txt-next').find('span');
//     $.each($txt, function (index, item) {
//       // console.log(item);
//       if (dirFrom === 'right') trueIndex = index;
//       else trueIndex = $txt.length - index;
//       $(item).animate({
//         transform: `translate(0)`,
//         opacity: 1
//       }, {
//         duration: 1500,
//         easing: 'cubic-bezier(.5,.52,0,1)',
//         complete: () => { },
//         delay: (trueIndex + 5) * (that.nowPageIndex === 4 ? 20 : 40)
//       });
//     });
//     $fontsContainer.find('div').toggleClass('rj-txt-next rj-txt-current');
//   },
//   // 文字滑出
//   txtOut(dirTo) {
//     let $txt = $('#rj-fonts-container .rj-txt-current').find('span');
//     let properties = {
//       transform: `translate(${dirTo === 'left' ? '-' : ''}9rem)`,
//       opacity: 0
//     }
//     let trueIndex;
//     // console.log($txt);
//     $.each($txt, function (index, item) {
//       // console.log(item);
//       if (dirTo === 'left') trueIndex = index;
//       else trueIndex = $txt.length - index;
//       $(item).animate(properties, {
//         duration: 1500,
//         easing: 'cubic-bezier(.5,.52,0,1)',
//         complete: () => {
//           $(this).remove();
//         },
//         delay: trueIndex * 25
//       });
//     });
//   },
//   // 设置对应index的轮播图内容
//   preSetSrc(className, index) {
//     $($bannerImgs[this.pagesPosClassArr.indexOf(className)])
//       .attr("src", this.imgSrc[index]);
//   },
//   // 下一页
//   nextPage(nextPageIndex) {
//     this.nowPageIndex = nextPageIndex % 5;
//     this.preSetSrc('rj-next-page', this.nowPageIndex); // 设置将要出现的图片的src
//     this.clearMoveClass();
//     // 设置移入移出动画类名
//     $($bannerPages[this.pagesPosClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-left");
//     $($bannerPages[this.pagesPosClassArr.indexOf("rj-next-page")]).addClass("rj-banner-in-from-right");
//     // 文字移入移出
//     this.txtOut('left');
//     this.txtIn('right', this.cTxtArr[this.nowPageIndex], this.eTxtArr[this.nowPageIndex]);
//     // 更新
//     this.pagesPosClassArr.unshift(this.pagesPosClassArr.pop());
//     this.setPosClass();
//     this.setBtns();
//     // console.log('跳转到下一页：', this.nowPageIndex);
//   },
//   // 上一页
//   prePage(nextPageIndex) {
//     this.nowPageIndex = nextPageIndex < 0 ? 4 : nextPageIndex;
//     this.preSetSrc('rj-pre-page', this.nowPageIndex); // 设置将要出现的图片的src
//     this.clearMoveClass();
//     $($bannerPages[this.pagesPosClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-right");
//     $($bannerPages[this.pagesPosClassArr.indexOf("rj-pre-page")]).addClass("rj-banner-in-from-left");
//     this.txtOut('right');
//     this.txtIn('left', this.cTxtArr[this.nowPageIndex], this.eTxtArr[this.nowPageIndex]);
//     this.pagesPosClassArr.push(this.pagesPosClassArr.shift());
//     this.setPosClass();
//     this.setBtns();
//     // console.log('跳转到上一页：', this.nowPageIndex);
//   },
//   // 开始轮播图
//   start() {
//     // 如果开始则初始化按钮
//     if (!this.hasStart) {
//       this.hasStart = true;
//       $bannerBtns.eq(this.nowPageIndex)
//         .addClass('rj-banner-btn-current');
//     }
//     // 到下一张图的时间
//     let bannerTime = this.bannerTotalTime;
//     if(this.isStopping) {
//       // 如果正在停止 需要计算剩下的时间才开始
//       bannerTime = bannerTime - parseFloat(window.getComputedStyle(document.getElementsByClassName('rj-banner-btn-current')[0].firstElementChild).width) / 
//       parseFloat(window.getComputedStyle(document.getElementsByClassName('rj-banner-btn-current')[0]).width) * bannerTime; 
//       $('.rj-banner-btn-current .rj-banner-timer').css({
//         animationPlayState: 'running'
//       });
//     } 
//     this.isStopping = false;
//     this.timer = setInterval(() => {
//       throttleNextBanner();
//     }, bannerTime);
//   },
//   // 轮播停止 
//   stop() {
//     this.isStopping = true;
//     clearInterval(this.timer);
//     console.log($('.rj-banner-btn-current .rj-banner-timer'));
//     let $timer = $('.rj-banner-btn-current .rj-banner-timer');
//     $timer.css({
//       animationPlayState: 'paused',
//     });
//   },
//   // 按钮设置
//   setBtns() {
//     $bannerBtns.removeClass("rj-banner-btn-current")
//       .eq(this.nowPageIndex)
//       .addClass('rj-banner-btn-current');
//   },
//   // 点击进入详情页的函数
//   toDetailPage(pageIndex) {
//       //重置1，并且恢复各组第一次的样子，防止圆盘滑动的时候触发滑动事件
//     // a = 1;
//     // let box = $('.innerwrap');
//     // let boxContent = $('.innerContent');
//     // let title = $('.title');
//     // box.each(function (item, index) {
//     //     $(this).css({
//     //         top: '0',
//     //         // opacity: "0"
//     //     })
//     // })
//     // boxContent.each(function (item, index) {
//     //     $(this).css({
//     //         // top: '0',
//     //         opacity: "0"
//     //     })
//     // })
//     // title.css({
//     //     // opacity: 1;
//     //     position: "absolute",
//     //     top: "20%",
//     //     left: "0",
//     //     transform: 'scale(1)',
//     //     // left: 10%;
//     //     // width: 380/@rem;
//     //     // height: 160/@rem;
//     //     textAlign: "center"
//     //     // transition: all 1s;
//     // })
//     this.watchPageIndex = pageIndex;
//     this.stop();
//     console.log("锐基：跳进" + this.cTxtArr[pageIndex]);
//     // 轮播图右滑
//     $banner.removeClass('rj-banner-in').addClass('rj-banner-out');
//     $detailPages.eq(pageIndex).css({
//       display: 'block'
//     }).siblings().css({
//       display: 'none'
//     });
//     // 幕布出现->消失
//     $whiteCur.addClass('rj-white-curtain-out').on('webkitAnimationEnd', function () {
//       $whiteCur.off('webkitAnimationEnd').removeClass('rj-white-curtain-out')
//               .find('div').addClass('rj-curtain-in-div-pre').removeClass('rj-curtain-out-div-pre');
//       canBack = true;
//     });
//   },
//   // 返回轮播图界面
//   backToBanner() {
//     $detailPages.eq(this.watchPageIndex).addClass('rj-detail-page-out');
//     $banner.removeClass('rj-banner-out').addClass('rj-banner-in');
//     // 幕布出现->消失
//     $whiteCur.addClass('rj-white-curtain-in').on('webkitAnimationEnd', function () {
//       $whiteCur.off('webkitAnimationEnd').removeClass('rj-white-curtain-in')
//       .find('div').addClass('rj-curtain-out-div-pre').removeClass('rj-curtain-in-div-pre');
//       $detailPages.removeClass('rj-detail-page-out');
//       $banner.removeClass('rj-banner-in');
//       canBack = false;
//     });
//     this.start();
//   },
// }

// // 返回轮播图界面
// $rjBackBtn.on('touchstart',function(){
//   if(canBack) {
//     canBack = false;
//     rjBanner.backToBanner();
//   }
// })

// // 调试用
// window.rjBanner = rjBanner;
// window.$banner = $banner;
// window.$whiteCur = $whiteCur;

// // 轮播图初始化
// rjBanner.init();

// /*
// * @desc 轮播图节流 时间戳版本
// * @param func 函数
// * @param index 跳转页面index
// * @param wait 延迟执行毫秒数
// */
// function throttleBanner(func, index, wait) {
//   let now = Date.now();
//   var p = new Promise(function (resolve, reject) {
//     if (now - previous > wait) {
//       func.call(rjBanner, index); // 调用换页函数
//       clearInterval(rjBanner.timer);	// 停止轮播
//       previous = now;
//       resolve();
//     }
//   });
//   return p;
// }

// // 下翻页节流
// function throttleNextBanner(jumpPage) {
//   // 如果有传入跳转页就是跳转页，否则默认下一页
//   let nextPageIndex = typeof (jumpPage) === 'number' ? jumpPage : rjBanner.nowPageIndex + 1;
//   throttleBanner(rjBanner.nextPage, nextPageIndex, rjBanner.bannerMoveTime).then(() => {
//     rjBanner.start();
//   });
// }
// // 上翻页节流
// function throttlePreBanner(jumpPage) {
//   // 如果有传入跳转页就是跳转页，否则默认上一页
//   let nextPageIndex = typeof (jumpPage) === 'number' ? jumpPage : rjBanner.nowPageIndex - 1;
//   throttleBanner(rjBanner.prePage, nextPageIndex, rjBanner.bannerMoveTime).then(() => {
//     rjBanner.start();
//   });
// }

// // 触发轮播图翻下一页
// $banner.swipeLeft(throttleNextBanner);
// $nextBannerBtn.tap(throttleNextBanner);
// // 触发轮播图翻上一页
// $banner.swipeRight(throttlePreBanner);
// $preBannerBtn.tap(throttlePreBanner);
// // 点击按钮跳转轮播图
// $bannerBtnUl.on('tap', '.rj-banner-btn', function () {
//   let nextPageIndex = $(this).index();
//   let diff = nextPageIndex - rjBanner.nowPageIndex;
//   if (diff > 0) {
//     throttleNextBanner(nextPageIndex);
//   } else if (diff < 0) {
//     throttlePreBanner(nextPageIndex);
//   }
// });

// // 点击轮播图进入界面
// $fontsContainer.tap(function () {
//   rjBanner.toDetailPage(rjBanner.nowPageIndex);
// })
// $bannerPages.tap(function () {
//   rjBanner.toDetailPage(rjBanner.nowPageIndex);
// })


// export default rjBanner;
 //var tag = a;//导出去了，也拿到了，但是拿到的那边改不了变量值
//  export default a;