//解决点透事件
!(function(){
    var aNodes = document.querySelectorAll('a');
    for (var i=0;i<aNodes.length;i++) {
        aNodes[i].addEventListener('touchstart',function(){
            window.location.href = this.href;
        })
    }
})();

//rem适配
!(function () {
    var styleNode = document.createElement('style');
    var width = document.documentElement.clientWidth;
    styleNode.innerHTML = 'html{font-size: ' + width / 16 + 'px !important;}';
    document.head.appendChild(styleNode)
})();
