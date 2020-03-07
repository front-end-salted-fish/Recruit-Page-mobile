// import imgUp from './zl-index'

//我的我的
// import upIcon from '../../img/icon_up.png'
// import 'zepto/src/zepto'
import './rem'
// import '../font/menu/iconfont.css'
// import functionCaller from "less/lib/less/functions/function-caller";
import rjBanner from './rj-index'
import EventUtil from './eventUtil'

//我的我的
var width = document.documentElement.clientWidth;
var rem = width / 16;


let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
let firstParameter = $('.mq-detail-page > .title');
let innerSpan = $('.mq-detail-page> .inner-span');
let thirdParameter = $('.mq-detail-page> .wrap');
let fourthParameter = $('.mq-detail-page >.wrap >.innerwrap> .innerContent');
const firstWidth = 380 / rem + "rem";
const firstHeight = 160 / rem + "rem";
// const firstTop = (160/rem - 8) +"rem";
const secondWidth = 300 / rem + "rem";
const secondHeight = 200 / rem + "rem";
const firstlineHeight = 40 / rem + "rem";
// let a = 1; // 切换页面时，将其置1
let mqObj = {
  tag: 1
};

// 

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
let $cfDetailPages = $('.mq-detail-page');
var rotateTimes = 0;



//设置不同适配里的文字显示
firstParameter.css({
  width: 15 + 'rem',
  height: firstHeight
});
// secondParameter.css({
//     top: firstTop + "!important"

// })
thirdParameter.css({
  width: 16+'rem',
  padding: '0 1.5rem',
  height: secondHeight,
  lineHeight: firstlineHeight,
})
fourthParameter.css({
  height: secondHeight
})
//详情页文字
//滑动往上
// !(()=>{
// 
// 创建提示上滑的提示图片
let imgUp = new Image();
let $upPromot = $('.zl-up-promot')
imgUp.src = "https://education.topviewclub.cn/file/assert/icon_up.png";
// 

$(imgUp).css({
  height: "auto",
  width: "1rem",
  position: "absolute",
  left: "47%",
  top: "81%",
})
$(imgUp).addClass('page-moveIconUp')
$upPromot.append(imgUp);

function distance1(classname) {
  // let list = $(classname).find('.innerwrap').find('.innerContent');
  let box = $(classname).find('.innerwrap');
  var pos = box.position();
   // 2 
  box.css({
    position: 'relative',
    // top: Math.ceil(pos.top/rem - 160/rem) + 'rem',
    top: (-200 / rem) * (mqObj.tag - 2) + 'rem', // 0 // -160 //320
    // opacity: 1,
    // left: pos.left
  });
}

function distance2(classname) {
  let box = $(classname).find('.innerwrap');
  var pos = box.position();
  
  box.css({
    position: 'relative',
    // top: Math.ceil(pos.top/rem + 160/rem)+'rem',
    top: (-200 / rem) * (mqObj.tag - 2) + 'rem',
    // left: pos.left
  });
  $(imgUp).show();
}

let outAnimate = {
  opacity: '0',
  filter: 'blur(30px)',
  transform: 'scale(1.3)'
}

let inAnimate = {
  opacity: '1',
  filter: 'blur(0px)',
  transform: 'scale(1)'
}
//滑动向上
function swipeU(classname) {
  EventUtil.listenTouchDirection(document.querySelector(classname), true, swipeUp, false, false, false)
  function swipeUp() {
      
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

      switch (++mqObj.tag) {
          case 2:
              let titleHtml = title.children().eq(0).html();
              if(titleHtml == '机器学习'){
                title
                .animate({
                  top:"10%",
                  left:"1.6rem",
                  transform: "scale(.5)", 
                },800)
              }else if(titleHtml == "前端"||"后台"){
                title.
                animate({
                  textIndent:"-6rem",
                },100)
                .animate({
                  top:"10%",
                  left:"1.6rem",
                  transform: "scale(.5)", 
                },800)
              }else{
                title.
                animate({
                  textIndent:"-4rem",
                },100)
                .animate({
                  top:"10%",
                  left:"1.6rem",
                  transform: "scale(.5)", 
                },800)
              }
             
            
              $(list[0]).css(inAnimate)
              // $(list[1]).addClass('opa');
              // distance1(classname)
              break;
          case 3:
              // box.addClass('opa');
              
              
              distance1(classname)
              // $(list[0]).removeClass('opa');
              $(list[0]).css(outAnimate)
              // $(list[1]).addClass('opa');
              $(list[1]).css(inAnimate)

              break;
          case 4:
              $(list[1]).css(outAnimate)
              $(list[2]).css(inAnimate)
              // $(list[1]).removeClass('opa');
              // $(list[2]).addClass('opa');
              // 
              distance1(classname)
              break;
          case 5:
              $(list[2]).css(outAnimate)
              $(list[3]).css(inAnimate)
              // $(list[2]).removeClass('opa');
              // $(list[3]).addClass('opa');
              // 
              distance1(classname)
              // $(imgUp).hide();
              break;
              // case 6:
              //     $(list[5]).addClass('opa');
              //     // 
              //     distance1(classname)
              //     $(imgUp).hide();
              //     break;
          case 6:
              $(list[3]).css(outAnimate)
              $(list[4]).css(inAnimate)

              // $(list[3]).removeClass('opa');
              // $(list[4]).addClass('opa');
              // 
              distance1(classname)
              $(imgUp).hide();
              break;
          default:
              mqObj.tag = 6;
              // $(list[4]).css({
              //     opacity: '1'
              // })
              break;
      }
      // }
      
  }
    // $(classname).swipeUp(
    // )
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
  EventUtil.listenTouchDirection(document.querySelector(classname), true, false, false, swipeDown, false)

  function swipeDown() {
    

    
    let title = $(classname).find('.title');
    let list = $(classname).find('.innerContent');
    let box = $(classname).find('.innerwrap');
    var pos = box.position();
    //    
    $(classname).find('.innerwrap').find('.innerContent').eq(4).css({
      opacity: '0'
    })


    // if (box.position().top / rem <= -160 / rem) {

    switch (mqObj.tag--) {
      case 6:
        // list.each(function(item,index){
        //     $(this).removeClass('opa');
        // });
        

        distance2(classname)
        $(list[4]).css(outAnimate)
        $(list[3]).css(inAnimate)
        // $(list[3]).addClass('opa1');
        // $(list[3]).addClass('opa1');
        // 

        break;
      case 5:
        
        $(list[3]).css(outAnimate)
        $(list[2]).css(inAnimate)
        // $(list[3]).removeClass('opa1');
        // $(list[2]).addClass('opa1');
        distance2(classname)
        break;
      case 4:
        
        // box.addClass('opa');
        // 
        $(list[2]).css(outAnimate)
        $(list[1]).css(inAnimate)
        // $(list[2]).removeClass('opa1');
        // $(list[1]).addClass('opa1');
        distance2(classname)
        
        break;
      case 3:
        
        

        $(list[1]).css(outAnimate)
        $(list[0]).css(inAnimate)

        // $(list[1]).removeClass('opa1');
        // $(list[0]).addClass('opa1');

        distance2(classname)
        // a = 3;
        // 
        break;
      case 2:
        $(list[0]).css(inAnimate)
        // title.css({
        //     top: "1rem",
        //     left: "-2.5rem",
        //     textAlign: "start",
        //     transform: "scale(.5)",
        // })
        // 
        break;
      // case 1:
      //     $(list[0]).addClass('opa1');
      //     a = 1;
      //     distance2(classname)
      //     // 
      //     break;
      default:
        mqObj.tag = 1;
        
        // $(list[0]).css({
        //     opacity: '1'
        // })
        break;
    }
    // }

  }
  // $(classname).swipeDown(
  // )

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
//旧旋转菜单
// let startDeg = 0;
// let startY = 0;

// // 计算旋转按钮位置
// function rotateFn(nodes) {
//     var radio = 360 / nodes.length;
//     var r = $('.move-wrap').width() / 2;
//     nodes.each(function (index, item) {
//         
//         var top = r - Math.sin((180 + index * radio) * Math.PI / 180) * r * 0.75;
//         var left = Math.cos((180 + index * radio) * Math.PI / 180) * r * 0.75 + r;

//         $(item).css({
//             top: top,
//             left: left
//         })
//     })
// }

// // 计算圆心角
// function computeDeg(xa, ya, xb, yb) {

//     var xc = parseInt($('#menu-wrap').css('left'));
//     var yc = parseInt($('#menu-wrap').css('top'));
//     xc += parseInt($('#menu-wrap').css('width')) / 2;
//     yc += parseInt($('#menu-wrap').css('width')) / 2;
//     var c2 = Math.abs(xa - xb) ^ 2 + Math.abs(ya - yb) ^ 2;
//     var b2 = Math.abs(xa - xc) ^ 2 + Math.abs(ya - yc) ^ 2;
//     var a2 = Math.abs(xb - xc) ^ 2 + Math.abs(yb - yc) ^ 2;
//     var a = Math.sqrt(a2);
//     var b = Math.sqrt(b2);
//     var c = Math.sqrt(c2);
//     var cos = (a2 + b2 - c2) / (2 * a * b);
//     var cDeg = Math.acos(cos);
//     
//     return cDeg;
// }

// //防抖函数
// function debounce(fn, wait) {
//     var timer = null;
//     return function () {
//         var context = this;
//         var args = arguments;
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(function () {
//             fn.apply(context, args)
//         }, wait)
//     }
// }

// // 跳转
// function changePage() {

//     is.removeClass('height-light');
//     is.eq(rjBanner.watchPageIndex).addClass('height-light');

//     if (rjBanner.hasInitDeg) {
//         $cfDetailPages.eq(rjBanner.watchPageIndex).removeClass('cf-blur-out').addClass('cf-blur-in').siblings().removeClass('cf-blur-in').addClass('cf-blur-out')
//         // $cfDetailPages.removeClass('cf-blur-in').addClass('cf-blur-out')
//         //     .eq(rjBanner.watchPageIndex).addClass('cf-blur-in');
//     }

// }

// let currentRotateDeg = 0;
// // let hasInitDeg = false;
// // 滑动事件函数
// let toggleMenu = function (e) {

//     e.stopPropagation();
//     if (!rjBanner.hasInitDeg) {
//         rotateTimes = rjBanner.watchPageIndex;
//         rjBanner.hasInitDeg = true;
//     }
//     startDeg = rotateTimes * 72;
//     
//     
//     changePage();
//     currentRotateDeg = rotateTimes * 72;
//     let that = this;
//     
//     var i = $(that).find('i');
//     if (i.hasClass('icon-caidan')) {
//         curtain.show();
//         i.removeClass();
//         i.addClass('iconfont icon-guanbi');
//         menu.show();
//         menu.css('opacity', 0);
//         if (iscomputePos) {
//             rotateFn(menuBtns, btnWrap);
//             iscomputePos = false;
//         }
//         menu.css('opacity', 1);
//         btnWrap.css('transform', 'rotate(' + (currentRotateDeg - 72 * 4) + 'deg)');
//         btnWrap.animate({
//             transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
//             transform: 'rotate(' + (currentRotateDeg) + 'deg)'
//         }, {
//             duration: 300
//         })
//     } else if (i.hasClass('icon-guanbi')) {
//         curtain.hide();
//         i.removeClass();
//         i.addClass('iconfont icon-caidan');
//         btnWrap.animate({
//             transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
//             transform: 'rotate(' + (currentRotateDeg + 72 * 4) + 'deg)'
//         }, {
//             duration: 300,
//             complete: function () {
//                 btnWrap.css('transform', 'rotate(' + (currentRotateDeg) + 'deg)');
//                 menu.hide();
//             }
//         });
//     }
// };
// menuBtn.on('tap', debounce(toggleMenu, 300));
// menuBtn.on('touchend', function (e) {
//     e.stopPropagation();
// });

// //menu move function
// function move(node) {
//     // 开始位置
//     let xa;
//     let ya;
//     // 在元素中保存开始位置
//     node.addEventListener('touchstart', function (e) {
//         e = e || window.event;
//         var touch = e.changedTouches[0];
//         // 
//         xa = touch.clientX;
//         ya = touch.clientY;
//         // var xast = touch.clientX.replace("px","");
//         // var yast = touch.clientY.replace("px","");
//         // 
//         startY = touch.clientY;
//     });
//     // node.addEventListener('touchend', 
//     node.addEventListener('touchend', debounce(cfMoveFn, 300));


// }

// let cfMoveFn = (e) => {
//     


//     // cf
//     e = e || window.event;
//     var touch = e.changedTouches[0];
//     // 
//     // 触摸坐标
//     // var xb = touch.clientX;
//     // var yb = touch.clientX;
//     // 计算要偏转的角度
//     // 
//     // var rotateDeg = computeDeg(xa, ya, xb, yb);
//     // 
//     menuBtns = $('#cf-menu .move-wrap').children();
//     // 获取目标事件手指
//     var endY = touch.clientY;
//     var disY = startY - endY;
//     if (Math.abs(disY) < MOVE_DIS) {
//         return false
//     }
//     // 判断是上滑还是下滑
//     if (disY > 0) {
//         
//         // 记录旋转次数
//         rotateTimes++;
//         rjBanner.watchPageIndex = (rjBanner.watchPageIndex === 4) ? 0 : (rjBanner.watchPageIndex + 1);
//         startDeg += 72;
//         // 
//     }
//     if (disY < 0) {
//         
//         rotateTimes--;
//         rjBanner.watchPageIndex = (rjBanner.watchPageIndex === 0) ? 4 : (rjBanner.watchPageIndex - 1);
//         startDeg -= 72;
//         // 
//     }
//     //重置1，并且恢复各组第一次的样子，防止圆盘滑动的时候触发滑动事件
//     mqObj.tag = 1;
//     let box = $('.innerwrap');
//     let boxContent = $('.innerContent');
//     let title = $('.title');
//     box.each(function (item, index) {
//         $(this).css({
//             top: '0',
//             transition: ''
//             // opacity: "0"
//         })
//     })
//     boxContent.each(function (item, index) {
//         $(this).css({
//             // top: '0',
//             opacity: "0",
//             transition: ''
//         })
//     })

//     title.css({
//         // opacity: 1;
//         position: "absolute",
//         top: "28%",
//         left: "0",
//         transform: 'scale(1)',
//         // left: 10%;
//         // width: 380/@rem;
//         // height: 160/@rem;
//         textAlign: "center"
//         // transition: all 1s;
//     }).children().css({
//         left: '',
//         transform: ''
//     })
//     // box.find(".innerContent").eq(0).css({
//     //     opacity: "0"
//     // })
//     btnWrap.animate({
//         transform: 'rotate(' + startDeg + 'deg)',
//     });
//     changePage();

//     // $('current-page').animate({
//     //         // display: 'block',
//     //         position: 'absolute',
//     //         left: '-100vw',
//     //         transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s'
//     //     }, {
//     //         duration: 300,
//     //         compute: function () {
//     //             $('current-page').hide().removeClass('current-page');
//     //         }
//     //     }
//     // );
//     // alldetailDiv.css({
//     //     display: 'block',
//     //     position: 'absolute',
//     //     left: disY > 0 ? '100vw' : '-100vw',
//     // }).removeClass('current-page');
//     // alldetailDiv.removeClass('detail-move-right').removeClass('detail-move-left');
//     // if(disY>0) {
//     //     alldetailDiv.addClass('detail-move-right');
//     // }else{
//     //     alldetailDiv.addClass('detail-move-left')
//     // }
//     // let myAnimate = {
//     //     transform: '0vw !importance',
//     //     transition: 'all cubic-bezier(0.17, 0.99, 1, 0.96) 0.3s !importance'
//     // };
//     
// };

// move(curtain[0]);
// move(menu[0]);
// //点击幕布关闭
// curtain.on('tap', function () {
//     var i = $('.menu-btn i');
//     curtain.hide();
//     i.removeClass();
//     i.addClass('iconfont icon-caidan');
//     btnWrap.animate({
//         transition: 'all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s',
//         transform: 'rotate(' + (currentRotateDeg + 72 * 4) + 'deg)'
//     }, {
//         duration: 300,
//         complete: function () {
//             btnWrap.css('transform', 'rotate(' + (currentRotateDeg) + 'deg)');
//             menu.hide();
//         }
//     });
// });

// 新版简约菜单
$('.cf-menu').on('click', 'svg', function () {
  let isOpenMenu = !$('.grid input').prop('checked');
  if (isOpenMenu) {
    $('.cf-curtain').css({
      display: 'block'
    })
    // $('.cf-curtain').css('display');
    setTimeout(function () {
      $('.cf-curtain-bg').animate({
        "-webkitTransform": "translate(100%,100%) scale3d(100,100,1)!important"
      }, 300, 'cubic-bezier(0.48, 0.21, 0.95, 0.71)', function () {
        $('.cf-curtain li>span').removeClass('cf-skew-text');
      });
      // $('.cf-curtain li>span').removeClass('cf-skew-text');

    }, 20)
  } else {
    setTimeout(function () {
      $('.cf-curtain li>span').addClass('cf-skew-text');
      setTimeout(function(){
        $('.cf-curtain-bg').animate({
          "-webkitTransform": "translate(100%,100%) scale3d(0,0,0)!important"
        }, 300, 'cubic-bezier(0.65, 0.04, 1, 0.99)', function () {
          $('.cf-curtain').css({
            display: 'none'
          })
        });
      },100)
    },20)
  }
})
$('.cf-menu-wrap').on('click', 'li', function () {

  let index = $(this).attr('data-index')
  rjBanner.watchPageIndex = index; //给轮播图标注当前是看到那一页
  setTimeout(function () {
    $('#mq-production>div').removeClass('cf-blur-in').addClass('cf-blur-out');
    $('#mq-production>div').eq(index).removeClass('cf-blur-out').addClass('cf-blur-in');
    $('.cf-curtain li>span').addClass('cf-skew-text');
    setTimeout(function () {
      $('.cf-curtain-bg').animate({
        "-webkitTransform": "translate(100%,100%) scale3d(0,0,0)!important"
      }, 300, 'cubic-bezier(0.65, 0.04, 1, 0.99)', function () {
        $('.cf-curtain').css({
          display: 'none'
        })
      });
    },100)
    $('.grid input').prop('checked', false);
  },20)
  // mq的置1
  //重置1，并且恢复各组第一次的样子，防止圆盘滑动的时候触发滑动事件
  mqObj.tag = 1;
  $(imgUp).show(); // 详情页提示上滑元素恢复显示
  let box = $('.innerwrap');
  let boxContent = $('.innerContent');
  let title = $('.title');
  box.each(function (item, index) {
    $(this).css({
      top: '0',
      transition: ''
      // opacity: "0"
    })
  })
  boxContent.each(function (item, index) {
    $(this).css({
      // top: '0',
      opacity: "0",
      transition: '',
      filter: 'blur(30px)',
      transform: 'scale(1.3)'
    })
  })
  // title.removeAttr("left");
  title.css({
    // opacity: 1;
    position: "absolute",
    top: "28%",
    left: "",
    // display:flex,
    // justifyContent: space-between,
    // margin:0 auto,
    transform: 'scale(1)',
    textIndent:'',
    // left: 10%;
    // width: 380/@rem;
    // height: 160/@rem;
    textAlign: "center",
    // fontSize:"3.5rem"
    // transition: all 1s;
  })
  // .children().css({
  //   // left: '',
  //   // transform: '',
  //   // textAlign:''
  //   fontSize:"3.5rem"
  // })
  
  // box.find(".innerContent").eq(0).css({
  //     opacity: "0"
  // })
});
//当关闭过渡动画结束是dispaly:none
// $('.cf-curtain').on('webkitTransitionEnd',function(){
//   let isOpenMenu = !$('.grid input').prop('checked');
//   if(isOpenMenu) {
//     $('.cf-curtain').css({
//       display: 'none'
//     })
//   }
// })
export default mqObj;
