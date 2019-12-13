// 开机动画
(() => {
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