import 'zepto'
import 'zepto/src/fx'
import 'zepto/src/fx_methods'
import mqObj from '../js/mq-production'
let mqFunc = () => {
  mqObj.tag = 1;
    let box = $('.innerwrap');
    let boxContent = $('.innerContent');
    let title = $('.title');
    box.each(function (item, index) {
      $(this).css({
        top: '0',
        transition: ''
      })
    })
    boxContent.each(function (item, index) {
      $(this).css({
        opacity: "0",
        transition: ''
      })
    })
    title.css({
      position: "absolute",
      top: "28%",
      left: "",
      transform: 'scale(1)',
      textIndent: '',
      textAlign: "center"
    })
};
let $banner = $("#rj-banner"); // 获取整个轮播页面
// let $bannerContainer = $("#rj-banner-container"); // 获取轮播图容器
let $bannerPages = $(".rj-banner-page"); // 每个轮播页
let $bannerImgs = $(".rj-banner-page img"); // 每个轮播页的图片
let $bannerBtnUl = $("#rj-banner-btns"); // 按钮ul
let $bannerBtns = $bannerBtnUl.find(".rj-banner-btn"); // 轮播图按钮
let $nextBannerBtn = $("#rj-next"); // 下一页按钮
let $preBannerBtn = $("#rj-prev"); // 上一页按钮
let $fontsContainer = $('#rj-fonts-container'); // 文字存储框
let $detailPages = $('#mq-production').children(); // 获取详情页
// let $whiteCur = $('#rj-white-curtain'); // 切换时的白色幕布
let $spans = $('#rj-3d-tv').find('span'); // 轮播图TopView 字样
let $rjBackBtn = $('.zl-back-btn'); // 从详情页返回轮播图的按钮
// let $preLoad = $('#rj-img-pre-load img');

// 翻页节流共享previous
let previous = 0;


// 轮播图对象
let rjBanner = {
  nowPageIndex: 0, // 正在播放的轮播图的index值
  timer: undefined, // 轮播图控制器
  bannerTotalTime: 2700, // 动画时间+阅读时间
  bannerWatchTime: 1400, // 阅读时间
  bannerMoveTime: 1300, // 动画时间
  bannerTxtDelayTime: 20,
  hasStart: false,
  isStopping: true,
  canBack: false, // 是否可以返回轮播图（因为存在动画还没结束就点击按钮的情况）
  // 用户正在阅读的页码
  watchPageIndex: undefined,
  hasInitDeg: false,
  // 存放位置类名的数组
  pagesPosClassArr: ["rj-pre-page", "rj-mid-page", "rj-next-page"],
  // 存放图片链接的数组
  imgSrc:[
    "https://xiao-education.oss-cn-shenzhen.aliyuncs.com/homework-file/2020-2-15/e70fa300f6a14a3f9e22456b546c5d0f1581764421458/front-end-banner.jpg",
    "https://xiao-education.oss-cn-shenzhen.aliyuncs.com/homework-file/2020-2-15/6c1f1a76b9cb4af08fd2aebba06c7a361581770295650/backstage.png",
    "https://xiao-education.oss-cn-shenzhen.aliyuncs.com/homework-file/2020-2-15/1ab1e4687190487290d0d177d73300871581770367403/andriod-banner.jpg",
    "https://xiao-education.oss-cn-shenzhen.aliyuncs.com/homework-file/2020-2-15/5727f3066fbe40279f5e23b09fa82df91581770418754/ios-banner.jpg",
    "https://xiao-education.oss-cn-shenzhen.aliyuncs.com/homework-file/2020-2-15/02674cf25478490b8aaf0406612005fd1581770447407/machine-learning-banner-2.jpg"
  ],
  // 中文字体的数组
  cTxtArr: ["前端", "后台", "安卓", "iOS", "机器学习"],
  // 英文字体的数组
  eTxtArr: ["Front-end", "Back-end", "android", "", "Machine-learning"],
  isInDetailPage: false,
  detailPageColors: ["#452f12","#2d0d43","#454545","#1b3f3b","#16233d"],
  // 初始化函数
  init() {
    $bannerImgs.eq(1).attr('src', this.imgSrc[0]);
    this.setPosClass();
  },
  // 位置class的重置
  setPosClass() {
    for (let i = 0; i < $bannerPages.length; i++) {
      $($bannerPages[i]).removeClass("rj-pre-page rj-mid-page rj-next-page")
        .addClass(this.pagesPosClassArr[i]);
    }
  },
  // 清除动画class
  clearMoveClass() {
    for (let i = 0; i < $bannerPages.length; i++) {
      $($bannerPages[i]).removeClass("rj-banner-out-to-left rj-banner-in-from-right rj-banner-out-to-right rj-banner-in-from-left");
    }
  },
  // 文字滑入
  txtIn(dirFrom) {
    let cTxt = this.cTxtArr[this.nowPageIndex]; // 即将滑入的中文内容
    let eTxt = this.eTxtArr[this.nowPageIndex]; // 即将滑入的英文内容
    let that = this;
    let trueIndex;
    let cTxtHtml = '';
    let eTxtHtml = '';
    let cLength = cTxt.length; // 中文个数
    let eLength = eTxt.length; // 英文个数
    let $nextCTxt = $fontsContainer.find('.rj-c-txt.rj-txt-next'); // 中文容器
    let $nextETxt = $fontsContainer.find('.rj-e-txt.rj-txt-next'); // 英文容器
    for (let i = 0; i < cLength; i++) {
      cTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${cTxt[i]}</span>`;
    }
    for (let i = 0; i < eLength; i++) {
      eTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${eTxt[i]}</span>`;
    }
    $nextCTxt.append(cTxtHtml);
    $nextETxt.append(eTxtHtml);
    let $nextCHtml = $nextCTxt.find('span');
    let $nextEHtml = $nextETxt.find('span');
    let cMoveTime = this.bannerMoveTime - ((cLength - 1) * this.bannerTxtDelayTime);
    let eMoveTime = this.bannerMoveTime - ((eLength - 1) * this.bannerTxtDelayTime);
    $.each($nextCHtml, function (index, item) {
      if (dirFrom === 'right') trueIndex = index; // 从右往左进入
      else trueIndex = cLength - index;
      $(item).animate({
        transform: `translate3d(0, 0, 0)`,
        opacity: 1
      }, {
        duration: cMoveTime, // 每个span的动画时间
        easing: 'cubic-bezier(.5,.52,0,1)',
        complete: () => {},
        delay: that.bannerTxtDelayTime * trueIndex
      });
    });

    $.each($nextEHtml, function (index, item) {
      if (dirFrom === 'right') trueIndex = index; // 从右往左进入
      else trueIndex = eLength - index;
      $(item).animate({
        transform: `translate3d(0, 0, 0)`,
        opacity: 1
      }, {
        duration: eMoveTime, // 每个span的动画时间
        easing: 'cubic-bezier(.5,.52,0,1)',
        complete: () => {},
        delay: that.bannerTxtDelayTime * trueIndex
      });
    })
    $fontsContainer.find('div').toggleClass('rj-txt-next rj-txt-current');
  },
  // 文字滑出
  txtOut(dirTo) {
    let trueIndex;
    let $currentCTxt = $fontsContainer.find('.rj-c-txt.rj-txt-current span'); // 中文span
    let $currentETxt = $fontsContainer.find('.rj-e-txt.rj-txt-current span'); // 英文span
    let cLength = $currentCTxt.length;
    let eLength = $currentETxt.length;
    let cMoveTime = this.bannerMoveTime - ((cLength - 1) * this.bannerTxtDelayTime);
    let eMoveTime = this.bannerMoveTime - ((eLength - 1) * this.bannerTxtDelayTime);
    let that = this;
    let properties = {
      transform: `translate3d(${dirTo === 'left' ? '-' : ''}9rem, 0, 0)`,
      opacity: 0
    }
    $.each($currentCTxt, function (index, item) {
      if (dirTo === 'left') trueIndex = index;
      else trueIndex = cLength - index;
      $(item).animate(properties, {
        duration: cMoveTime,
        easing: 'cubic-bezier(.5,.52,0,1)',
        complete: () => {
          $(this).remove();
        },
        delay: that.bannerTxtDelayTime * trueIndex
      });
    });
    $.each($currentETxt, function (index, item) {
      if (dirTo === 'left') trueIndex = index;
      else trueIndex = eLength - index;
      $(item).animate(properties, {
        duration: eMoveTime,
        easing: 'cubic-bezier(.5,.52,0,1)',
        complete: () => {
          $(this).remove();
        },
        delay: that.bannerTxtDelayTime * trueIndex
      });
    });
  },
  // 设置对应index的轮播图内容
  preSetSrc(className, index) {
    $($bannerImgs[this.pagesPosClassArr.indexOf(className)])
      .attr("src", this.imgSrc[index]);
  },
  // 下一页
  nextPage(nextPageIndex) {
    this.nowPageIndex = nextPageIndex % 5;
    this.preSetSrc('rj-next-page', this.nowPageIndex); // 设置将要出现的图片的src
    this.clearMoveClass();
    // 设置移入移出动画类名
    $($bannerPages[this.pagesPosClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-left");
    $($bannerPages[this.pagesPosClassArr.indexOf("rj-next-page")]).addClass("rj-banner-in-from-right");
    // 文字移入移出
    this.txtOut('left');
    this.txtIn('right');
    // 更新
    this.pagesPosClassArr.unshift(this.pagesPosClassArr.pop());
    this.setPosClass();
    this.setBtns();
  },
  // 上一页
  prePage(nextPageIndex) {
    this.nowPageIndex = nextPageIndex < 0 ? 4 : nextPageIndex;
    this.preSetSrc('rj-pre-page', this.nowPageIndex); // 设置将要出现的图片的src
    this.clearMoveClass();
    $($bannerPages[this.pagesPosClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-right");
    $($bannerPages[this.pagesPosClassArr.indexOf("rj-pre-page")]).addClass("rj-banner-in-from-left");
    this.txtOut('right');
    this.txtIn('left');
    this.pagesPosClassArr.push(this.pagesPosClassArr.shift());
    this.setPosClass();
    this.setBtns();
  },
  // 开始轮播图
  start() {
    // 如果开始则初始化按钮
    if (!this.hasStart) {
      this.hasStart = true;
      // TopView 字样反转
      $bannerBtns.eq(this.nowPageIndex)
        .addClass('rj-banner-btn-current');
      $.each($spans, function (index, item) {
        $(item).animate({
          transform: 'rotate3d(0,1,0,720deg)'
        }, {
          duration: 3000,
          easing: 'cubic-bezier(.5,.52,0,1)',
          delay: (index) * 200
        });
      });
    }
    // 到下一张图的时间
    let bannerTime = this.bannerTotalTime;
    if (this.isStopping) {
      // 如果正在停止 需要计算剩下的时间才开始
      bannerTime = bannerTime - parseFloat(window.getComputedStyle(document.getElementsByClassName('rj-banner-btn-current')[0].firstElementChild).width) /
        parseFloat(window.getComputedStyle(document.getElementsByClassName('rj-banner-btn-current')[0]).width) * bannerTime;
      $('.rj-banner-btn-current .rj-banner-timer').css({
        animationPlayState: 'running'
      });
    }
    this.isStopping = false;
    this.timer = setInterval(() => {
      throttleNextBanner();
    }, bannerTime);
  },
  // 轮播停止 
  stop() {
    this.isStopping = true;
    clearInterval(this.timer);
    // console.log($('.rj-banner-btn-current .rj-banner-timer'));
    let $timer = $('.rj-banner-btn-current .rj-banner-timer');
    $timer.css({
      animationPlayState: 'paused',
    });
  },
  // 按钮设置
  setBtns() {
    $bannerBtns.removeClass("rj-banner-btn-current")
      .eq(this.nowPageIndex)
      .addClass('rj-banner-btn-current');
  },
  // 点击进入详情页的函数
  toDetailPage(pageIndex) {
    // 轮播图右滑
    mqFunc();
    this.isInDetailPage = true;
    this.watchPageIndex = pageIndex;
    this.stop();
    $detailPages.eq(rjBanner.watchPageIndex).addClass('cf-blur-in').siblings().addClass('cf-blur-out');
    $('body').append(this.createHtml(this.detailPageColors[pageIndex]));
    let $curtainUp = $('#rj-curtain-up');
    let $curtainDown = $('#rj-curtain-down');
    let $curtains = $('#rj-curtain-up,#rj-curtain-down');
    $curtains.animate({
      transform: 'translate3d(0,0,0)'
    }, {
      duration: 700,
      easing: 'cubic-bezier(.57, .02, .1, .99)',
      complete: () => {
        setTimeout(() => {
          $banner.css('visibility','hidden');
          $('#zl-detail-pages').fadeIn(0);
          setTimeout(()=>{
            $curtainUp.animate({
              transform: 'translate3d(0,-100%,0)'
            }, {
              duration: 700,
              easing: 'cubic-bezier(.57, .02, .1, .99)',
              complete: () => {
                $('.rj-curtain-container').remove();
              }
            });
            $curtainDown.animate({
              transform: 'translate3d(0,100%,0)'
            }, {
              duration: 700,
              easing: 'cubic-bezier(.57, .02, .1, .99)'
            })
          },0);
        },0);
      }
    })
  },
  // 返回轮播图界面
  backToBanner(callBack1, callBack2) {
    //从轮播图进去详情页要重置1，这样再从详情页返回到轮播图之后，再从轮播图进到详情页逻辑才不会乱
    mqFunc();
    if(this.isInDetailPage) this.isInDetailPage = false;
    $('body').append(this.createHtml("#4e4b4a"));
    let $curtainUp = $('#rj-curtain-up');
    let $curtainDown = $('#rj-curtain-down');
    let $curtains = $('#rj-curtain-up,#rj-curtain-down');
    $curtains.animate({
      transform: 'translate3d(0,0,0)'
    }, {
      duration: 700,
      easing: 'cubic-bezier(.57, .02, .1, .99)',
      complete: () => {
        callBack1 && callBack1();
        $detailPages.removeClass('rj-detail-page-out cf-blur-out cf-blur-in');
        setTimeout(() => {
          $banner.css('visibility','');
          $('#zl-detail-pages').fadeOut(0);
          setTimeout(()=>{
            $curtainUp.animate({
              transform: 'translate3d(0,-100%,0)'
            }, {
              duration: 700,
              easing: 'cubic-bezier(.57, .02, .1, .99)',
              complete: () => {
                callBack2 && callBack2();
                $('.rj-curtain-container').remove();
              }
            });
            $curtainDown.animate({
              transform: 'translate3d(0,100%,0)'
            }, {
              duration: 700,
              easing: 'cubic-bezier(.57, .02, .1, .99)'
            })
          },0);
        },0);
      }
    })
    rjBanner.isStopping && rjBanner.start();
  },
  openForm(e) {
    rjBanner.stop();
    let $rjCircle = $('.rj-menu-overlay_circle'); // 打开表单的放大圆点
    let $formPage = $('#zl-form-page');
    $rjCircle.css({
      top: e.clientY
    }).addClass('rj-circle-openning'); // 圆点放大
    $formPage.fadeIn(0);
    $('#wf-form').addClass('rj-openning').scrollTop(0);
  },
  createHtml(color) { 
    return `
    <div id="rj-curtain-up-container" class="rj-curtain-container" style="height: 50%;width: 100vw;z-index: 999;background: transparent;position: absolute;top: 0;left: 0; overflow:hidden;">
      <div id="rj-curtain-up" style="background: ${color};height: 100%;width: 100%;position: absolute;top:0;left:0;transform: translate3d(0, 100%, 0);"></div>
    </div>
    <div id="rj-curtain-down-container" class="rj-curtain-container" style="height: 50%;width: 100vw;z-index: 999;background: transparent;position: absolute;bottom: 0;left: 0;overflow:hidden;">
      <div id="rj-curtain-down" style="background: ${color};height: 100%;width: 100%;position: absolute;bottom:0;left:0;transform: translate3d(0, -100%, 0);"></div>
    </div>
  `;
  }
}

// 返回轮播图界面
$rjBackBtn.on('touchstart', function () {
  $('.zl-up-promot img').show() // 显示详情页的上滑提示元素
  rjBanner.backToBanner();
})


// 轮播图初始化
rjBanner.init();

/*
 * @desc 轮播图节流 时间戳版本
 * @param func 函数
 * @param index 跳转页面index
 * @param wait 延迟执行毫秒数
 */
function throttleBanner(func, index, wait) {
  let now = Date.now();
  var p = new Promise(function (resolve, reject) {
    if (now - previous > wait) {
      func.call(rjBanner, index); // 调用换页函数
      clearInterval(rjBanner.timer); // 停止轮播
      previous = now;
      resolve();
    }
  });
  return p;
}

// 下翻页节流
function throttleNextBanner(jumpPage) {
  // 如果有传入跳转页就是跳转页，否则默认下一页
  let nextPageIndex = typeof (jumpPage) === 'number' ? jumpPage : rjBanner.nowPageIndex + 1;
  throttleBanner(rjBanner.nextPage, nextPageIndex, rjBanner.bannerMoveTime).then(() => {
    rjBanner.start();
  });
}
// 上翻页节流
function throttlePreBanner(jumpPage) {
  // 如果有传入跳转页就是跳转页，否则默认上一页
  let nextPageIndex = typeof (jumpPage) === 'number' ? jumpPage : rjBanner.nowPageIndex - 1;
  throttleBanner(rjBanner.prePage, nextPageIndex, rjBanner.bannerMoveTime).then(() => {
    rjBanner.start();
  });
}

// 触发轮播图翻下一页
$banner.swipeLeft(throttleNextBanner);
$nextBannerBtn.tap(throttleNextBanner);
// 触发轮播图翻上一页
$banner.swipeRight(throttlePreBanner);
$preBannerBtn.tap(throttlePreBanner);
// 点击按钮跳转轮播图
$bannerBtnUl.on('tap', '.rj-banner-btn', function () {
  let nextPageIndex = $(this).index();
  let diff = nextPageIndex - rjBanner.nowPageIndex;
  if (diff > 0) {
    throttleNextBanner(nextPageIndex);
  } else if (diff < 0) {
    throttlePreBanner(nextPageIndex);
  }
});

// 点击轮播图进入界面
$bannerPages.on('click', function () {
  rjBanner.toDetailPage(rjBanner.nowPageIndex);
})

//  轮播图打开表单
$('#rj-join-btn').on('click', rjBanner.openForm);

export default rjBanner;
