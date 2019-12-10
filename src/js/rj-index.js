import testImg1 from '../../img/rj-banner-test.jpg'
import testImg2 from '../../img/rj-banner-test2.jpg'
import testImg3 from '../../img/rj-banner-test3.jpg'
import testImg4 from '../../img/rj-banner-test.jpg'
import testImg5 from '../../img/rj-banner-test2.jpg'

let $banner = $("#rj-banner"); // 获取整个轮播页面
let $bannerPages = $(".rj-banner-page");  // 每个轮播页
let $bannerImgs = $(".rj-banner-page img");    // 每个轮播页的图片
let $bannerBtnUl = $("#rj-banner-btns");  // 按钮ul
let $bannerBtns = $bannerBtnUl.find(".rj-banner-btn"); // 轮播图按钮
let $nextBannerBtn = $("#rj-next"); // 下一页按钮
let $preBannerBtn = $("#rj-prev"); // 上一页按钮
let $fontsContainer = $('#rj-fonts-container'); // 文字存储框
// let $cTxtCur = $('#rj-fonts-container .rj-c-txt.rj-txt-current');  // 存放中文的框-当前
// let $cTxtNext = $('#rj-fonts-container .rj-c-txt.rj-txt-next');  // 存放中文的框-下一个
// let $eTxtCur = $('#rj-fonts-container .rj-e-txt.rj-txt-current'); // 存放英文的框-当前
// let $eTxtNext = $('#rj-fonts-container .rj-e-txt.rj-txt-next'); // 存放英文的框-下一个

// 轮播图对象
let rjBanner = {
  nowPageIndex: 0, // 正在播放的轮播图的index值
  timer: undefined, // 轮播图控制器
  bannerTotalTime: 5500, // 动画时间+阅读时间
  bannerWatchTime: 3000, // 阅读时间
  bannerMoveTime: 2500, // 动画时间
  hasStart: false,
  // 存放位置类名的数组
  pagesClassArr: [
    "rj-pre-page",
    "rj-mid-page",
    "rj-next-page"
  ],
  // 存放图片链接的数组
  imgSrc: [
    testImg1,
    testImg2,
    testImg3,
    testImg4,
    testImg5,
  ],
  // 中文字体的数组
  cTxtArr: [
    "前端","后台","安卓","iOS","机器学习"
  ],
  // 英文字体的数组
  eTxtArr: [
    "Front-end","Back-end","Android","","Machine-learning"
  ],

  // 初始化函数
  init() {
    $bannerImgs[1].src = testImg1;
    this.setPosClass();
  },
  // 位置class的重置
  setPosClass() {
    for (let i = 0; i < $bannerPages.length; i++) {
      $($bannerPages[i]).removeClass("rj-pre-page rj-mid-page rj-next-page")
        .addClass(this.pagesClassArr[i]);
    }
  },
  // 清除动画class
  clearMoveClass() {
    for (let i = 0; i < $bannerPages.length; i++) {
      $($bannerPages[i]).removeClass("rj-banner-out-to-left rj-banner-in-from-right rj-banner-out-to-right rj-banner-in-from-left");
    }
  },
  // 文字滑入
  txtIn(dirFrom, cTxt, eTxt) {
    let that = this;
    let trueIndex; 
    let cTxtHtml = '';
    let eTxtHtml = '';
    for(let i = 0; i<cTxt.length; i++){
      cTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${cTxt[i]}</span>`;
    }
    for(let i = 0; i<eTxt.length; i++){
      eTxtHtml += `<span class="rj-from-${dirFrom}-in-span">${eTxt[i]}</span>`;
    }
    $fontsContainer.find('.rj-c-txt.rj-txt-next').append(cTxtHtml);
    $fontsContainer.find('.rj-e-txt.rj-txt-next').append(eTxtHtml);
    let $txt = $('#rj-fonts-container .rj-txt-next').find('span');
    $.each($txt, function(index, item){
      // console.log(item);
      if(dirFrom === 'right') trueIndex = index;
      else trueIndex = $txt.length - index;
      $(item).animate({
        transform: `translate(0)`,
        opacity: 1
      },{
        duration:1500,
        easing:'cubic-bezier(.5,.52,0,1)',
        complete: () => {},
        delay: (trueIndex + 5) * (that.nowPageIndex === 4 ? 20 : 40)
      });
    });
    $fontsContainer.find('div').toggleClass('rj-txt-next rj-txt-current');
  },
  // 文字滑出
  txtOut(dirTo) {
    let that = this;
    let $txt = $('#rj-fonts-container .rj-txt-current').find('span');
    let properties = {
      transform: `translate(${dirTo === 'left' ? '-': ''}9rem)`,
      opacity: 0
    }
    let trueIndex; 
    // console.log($txt);
    $.each($txt, function(index, item){
      // console.log(item);
      if(dirTo === 'left') trueIndex = index;
      else trueIndex = $txt.length - index;
      $(item).animate(properties,{
        duration:1500,
        easing:'cubic-bezier(.5,.52,0,1)',
        complete: () => {
          $(this).remove();
        },
        delay: trueIndex * 25
      });
    });
  },
  // 设置对应index的轮播图内容
  preSetSrc(className, index) {
    $($bannerImgs[this.pagesClassArr.indexOf(className)])
      .attr("src", this.imgSrc[index]);
  },
  // 下一页
  nextPage(nextPageIndex) {
    this.nowPageIndex = nextPageIndex % 5;
    this.preSetSrc('rj-next-page', this.nowPageIndex); // 设置将要出现的图片的src
    this.clearMoveClass();
    $($bannerPages[this.pagesClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-left");
    $($bannerPages[this.pagesClassArr.indexOf("rj-next-page")]).addClass("rj-banner-in-from-right");
    this.txtOut('left');
    this.txtIn('right', this.cTxtArr[this.nowPageIndex], this.eTxtArr[this.nowPageIndex]);
    this.pagesClassArr.unshift(this.pagesClassArr.pop());
    this.setPosClass();
    this.setBtns();
    // console.log('跳转到下一页：', this.nowPageIndex);
  },
  // 上一页
  prePage(nextPageIndex) {
    this.nowPageIndex = nextPageIndex < 0 ? 4 : nextPageIndex;
    this.preSetSrc('rj-pre-page', this.nowPageIndex); // 设置将要出现的图片的src
    this.clearMoveClass();
    $($bannerPages[this.pagesClassArr.indexOf("rj-mid-page")]).addClass("rj-banner-out-to-right");
    $($bannerPages[this.pagesClassArr.indexOf("rj-pre-page")]).addClass("rj-banner-in-from-left");
    this.txtOut('right');
    this.txtIn('left', this.cTxtArr[this.nowPageIndex], this.eTxtArr[this.nowPageIndex]);
    this.pagesClassArr.push(this.pagesClassArr.shift());
    this.setPosClass();
    this.setBtns();
    // console.log('跳转到上一页：', this.nowPageIndex);
  },
  // 开始轮播图
  start() {
    if (!this.hasStart) {
      this.hasStart = true;
      $bannerBtns.eq(this.nowPageIndex)
        .addClass('rj-banner-btn-current');
    }
    this.timer = setInterval(() => {
      throttleNextBanner();
    }, this.bannerTotalTime);
  },
  // 轮播停止 
  stop() {
    clearInterval(this.timer);
  },
  // 按钮设置
  setBtns() {
    $bannerBtns.removeClass("rj-banner-btn-current")
      .eq(this.nowPageIndex)
      .addClass('rj-banner-btn-current');
  }
}

// 调试用
window.rjBanner = rjBanner;

// 轮播图初始化
rjBanner.init();

/*
* @desc 轮播图节流 时间戳版本
* @param func 函数
* @param index 跳转页面index
* @param wait 延迟执行毫秒数
*/
// 共享previous
let previous = 0;
function throttleBanner(func, index, wait) {
  let now = Date.now();
  var p = new Promise(function (resolve, reject) {
    if (now - previous > wait) {
      func.call(rjBanner, index); // 调用换页函数
      rjBanner.stop();	// 停止轮播
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
  // console.log('跳转到：', nextPageIndex);
  let diff = nextPageIndex - rjBanner.nowPageIndex;
  if (diff > 0) {
    throttleNextBanner(nextPageIndex);
  } else if (diff < 0) {
    throttlePreBanner(nextPageIndex);
  }
});

$bannerPages.on('touchstart', function() {
  console.log(rjBanner.nowPageIndex);
  $banner.animate({
    transform: 'scale(2)',
    filter: 'blur(10px)',
    opacity: 0
  },1000, 'ease',function(){
    $banner.hide();
  });
})