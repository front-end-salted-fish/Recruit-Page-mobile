// 解决ios10以上依然可以双击放的的bug
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});
document.documentElement.addEventListener('touchmove', function (event) {
  if (event.touches.length > 1) {
      event.preventDefault();
  }
}, false);