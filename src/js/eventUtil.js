// // 禁止弹簧效果
// var startY, endY;
// //记录手指触摸的起点坐标
// $('body').on('touchstart', function (e) {
//   startY = e.touches[0].pageY;
// });
// $('body').on('touchmove', function (e) {
//   endY = e.touches[0].pageY; //记录手指触摸的移动中的坐标
//   //手指下滑，页面到达顶端不能继续下滑
//   if (endY > startY && $(window).scrollTop() <= 0) {
//     e.preventDefault();
//   }
//   //手指上滑，页面到达底部能继续上滑
//   if (endY < startY && $(window).scrollTop() +
//     $(window).height() >= $('body')[0].scrollHeight) {
//     e.preventDefault();
//   }
// })


// var overscroll = function (el) {
//   el.addEventListener('touchstart', function () {
//     var top = el.scrollTop,
//       totalScroll = el.scrollHeight,
//       currentScroll = top + el.offsetHeight;
//     if (top === 0) {
//       el.scrollTop = 1;
//     } else if (currentScroll === totalScroll) {
//       el.scrollTop = top - 1;
//     }
//   });

//   el.addEventListener('touchmove', function (evt) {
//     if (el.offsetHeight < el.scrollHeight)
//       evt._isScroller = true;
//   });
// }

// overscroll(document.querySelector('#wf-form'));
// document.body.addEventListener('touchmove', function (evt) {
//   if (!evt._isScroller) {
//     evt.preventDefault();
//   }
// });

let EventUtil = {
  addHandler: function (element, type, handler) {
      if (element.addEventListener)
          element.addEventListener(type, handler, false);
      else if (element.attachEvent)
          element.attachEvent("on" + type, handler);
      else
          element["on" + type] = handler;
  },
  removeHandler: function (element, type, handler) {
      if(element.removeEventListener)
          element.removeEventListener(type, handler, false);
      else if(element.detachEvent)
          element.detachEvent("on" + type, handler);
      else
          element["on" + type] = handler;
  },
  /**
   * 监听触摸的方向
   * @param target            要绑定监听的目标元素
   * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
   * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
   * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
   * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
   * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
   */
  listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
      this.addHandler(target, "touchstart", handleTouchEvent);
      this.addHandler(target, "touchend", handleTouchEvent);
      this.addHandler(target, "touchmove", handleTouchEvent);
      var startX;
      var startY;
      function handleTouchEvent(event) {
          switch (event.type){
              case "touchstart":
                  startX = event.touches[0].pageX;
                  startY = event.touches[0].pageY;
                  break;
              case "touchend":
                  var spanX = event.changedTouches[0].pageX - startX;
                  var spanY = event.changedTouches[0].pageY - startY;

                  if(Math.abs(spanX) > Math.abs(spanY)){      //认定为水平方向滑动
                      if(spanX > 30){         //向右
                          if(rightCallback)
                              rightCallback();
                      } else if(spanX < -30){ //向左
                          if(leftCallback)
                              leftCallback();
                      }
                  } else {                                    //认定为垂直方向滑动
                      if(spanY > 30){         //向下
                          if(downCallback)
                              downCallback();
                      } else if (spanY < -30) {//向上
                          if(upCallback)
                              upCallback();
                      }
                  }

                  break;
              case "touchmove":
                  //阻止默认行为
                  if(isPreventDefault)
                      event.preventDefault();
                  break;
          }
      }
  }
};
export default EventUtil