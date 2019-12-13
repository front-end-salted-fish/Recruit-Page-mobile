import rjBanner from '../js/rj-index'
// 开机动画
(() => {
    // 锐基添加的代码
    let loadingtransitionEnd = false;  // 动画是否结束
    let isAllLoaded = false;  // 是否全部加载完成
    // 开机动画消失
    let loadingOut = () => {
        if(isAllLoaded && loadingtransitionEnd) {
            $('#loading-module').animate({
                opacity: 0
            },1000,'ease',()=>{
                $('#loading-module').hide();
            });
            rjBanner.start();
        }
    }
    // 开机动画结束
    $($('.row-forth .move-span')[0]).on('webkitTransitionEnd', function(){
        $($('.row-forth .move-span')[0]).off('webkitTransitionEnd');   
        loadingtransitionEnd = true; 
        loadingOut();     
        // console.log('开机动画结束!',new Date().getTime());
    })
    window.onload = function() {
        isAllLoaded = true;
        loadingOut();  
        // console.log('资源加载结束!',new Date().getTime());
    }

    let that;
    class startAnimate {
        constructor() {
            that = this;
            // 获取第一行
            this.$rowOne = $("#loading-module #loading-box .row-one");
            // 获取第二行
            this.$rowTwo = $("#loading-module #loading-box .row-two");
            // 获取第三行
            this.$rowThree = $("#loading-module #loading-box .row-three");
            // 获取第四行
            this.$rowForth = $("#loading-module #loading-box .row-forth");
        }
        init() {
            console.log(this.$rowOne);
            let singgle = 600;
            //第一行
            this.resetStyle(this.$rowOne,"row-one-first-change","row-one-second-change",0);
            //第二行
            this.resetStyle(this.$rowTwo,"row-two-first-change","row-two-second-change",1 * singgle);
            //第三行
            this.resetStyle(this.$rowThree,"row-three-first-change","row-three-second-change",2 * singgle);
            //第四行
            this.resetStyle(this.$rowForth,"row-forth-first-change","row-forth-second-change",3 * singgle);
        }
        resetStyle(obj,change1,change2,time) {
            console.log("类名被改了")
            setTimeout(function() {
                obj.addClass(change1);
                setTimeout(function() {
                    obj.addClass(change2);
                },900);
            },time)
        }
    }
    let newStartAnimate = new startAnimate();
    newStartAnimate.init();


})();