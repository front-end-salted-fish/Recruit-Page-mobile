//解决点透事件
!(function () {
    var aNodes = document.querySelectorAll('a');
    for (var i = 0; i < aNodes.length; i++) {
        aNodes[i].addEventListener('touchstart', function () {
            window.location.href = this.href;
        })
    }
})();

// rem适配
!(function () {
    var styleNode = document.createElement('style');
    var width = document.documentElement.clientWidth;
    styleNode.innerHTML = 'html{font-size: ' + width / 16 + 'px !important;}';
    document.head.appendChild(styleNode)
})();
// // rem 及一像素适配
// !(function () {
//     //缩小的倍数和dpr相关, 知道dpr就知道1css像素=多少物理像素
//     var dpr = window.devicePixelRatio;
//     var scale = 1 / dpr;
//     var metaNode = document.querySelector('meta[name="viewport"]');
//     // metaNode.content = 'initial-scale=' + scale + ' user-saclable=no';
//     metaNode.content = "initial-scale=" + scale + ",user-scalable=no";
//     //rem反向放大, 此时width布局视口已经变成了750px了
//     var width = document.documentElement.clientWidth;
//     var styleNode = document.createElement('style');
//     styleNode.innerHTML = 'html{font-size: ' + width / 16 + 'px !importance;}';
//     document.head.appendChild(styleNode);
//     // 缩小的倍数和dpr相关，知道dpr就知道1css像素 = 多少物理像素
//
// })();
// var dpr = window.devicePixelRatio;
// var scale = 1/dpr;
// var metaNode = document.querySelector('meta[name="viewport"]');
// metaNode.content = "initial-scale="+ scale +",user-scalable=no";
//
//
// //rem适配反向将宽高放大
// //反向放大rem值的时候，这个width在此时求，下面的width/16不需要乘以2
// //如果width是在上面一开始求的，那么 width/16需要乘以2
//
// var width = document.documentElement.clientWidth;
// var styleNode = document.createElement('style');
// styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
// document.head.appendChild(styleNode);