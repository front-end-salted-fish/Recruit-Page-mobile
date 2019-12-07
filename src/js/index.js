// 放置主要的js文件
import '../css/reset.less'
import '../css/index.less'
import '../bootstrap-3.3.7-dist/css/bootstrap.css'
//import $ from 'zepto'
import $ from '../../lib/myzepto'
import './mq-production'

$(function () {
        console.log($('div'))
    })
    //解决点透事件
    !(function () {
        var aNodes = document.querySelectorAll('a');
        for (var i = 0; i < aNodes.length; i++) {
            aNodes[i].addEventListener('touchstart', function () {
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
