var width = document.documentElement.clientWidth;
var rem = width / 16;
let timeoutD;
let timeoutU;
let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
//详情页文字
//滑动往下
// !(()=>{
    function swipeD(classname) {
        //  console.log($(classname).find('.innerwrap').position().top)
        // console.log($('#mq-production')[0])
        // $('#mq-production')[0].timeout = 'hah'
        // console.log($('#mq-production')[0].timeout)
        // if (timeoutD) return;
        // timeoutD = setTimeout(function(){
        $('#mq-production').swipeDown(    
            function () {
                // console.log(11)
                // console.log(timeoutD, '11111')
                if (timeoutU) {timeoutU = undefined}
                if (timeoutD) return false;
                timeoutD = setTimeout(() => {
                    console.log(timeoutD);
                    let list = $(classname).find('.innerwrap').find('.innerContent');
                    let box = $(classname).find('.innerwrap');
                    var pos = box.position();
                    $(classname).find('.innerwrap').find('.innerContent').each(function (item, index) {
                        $(this).removeClass('opa1');
                    });
                    // console.log(pos);
                    // document.documentElement.scrollTop=100;
                    // console.log(document.documentElement.scrollTop);
                    // if(box.position().top/rem>= -640/rem&&box.position().top/rem===Math.ceil(box.position().top/rem)){
                    if (box.position().top / rem >= -640 / rem) {    
                    box.css({
                            position: 'relative',
                            // top: Math.ceil(pos.top/rem - 160/rem) + 'rem',
                            top: pos.top / rem - 160 / rem + 'rem',   
                            // opacity: 1,
                            // left: pos.left
                        });
                        //   if(box.css("opacity") == 1) {
                        //     box.css({
                        //       opacity: 0
                        //   });
                        //   }    
                        //   box.addClass('opa'); 
                        //   list.each(function(index,item){
                        //     $(this).css({
                        //     opacity: 1
                        //     });
                        // });       
                        console.log(box.position().top / rem);
                        //   debugger
                        switch (pos.top / rem) {
                            case 0:
                                $(list[1]).addClass('opa');
                                break;
                            case -160 / rem:
                                // box.addClass('opa');
                                // console.log($(list[1]));
                                $(list[2]).addClass('opa');
    
                                break;
                            case -320 / rem:
                                $(list[3]).addClass('opa');
                                // console.log(list[2]);
                                break;
                            case -480 / rem:
                                $(list[4]).addClass('opa');
                                // console.log(list[3]);
    
                                break;
                            case -640 / rem:
                                $(list[5]).addClass('opa');
                                // console.log(list[4]);
    
                                break;
                            default:
                                break;
                        }
                    }   
                    // console.log(list[1]);
                    timeoutD = undefined
                }, 1000)
            }   
        )
        // },6000);    
    }   
    !(() => {    
        swipeD(lastId)
    })();
    // })();
    //滑动往上
    // !(()=>{
    // $('.innerContent').each(function(item,index){
    //         $(this).removeClass('opa');
    //     });
    // console.log($('#innerwrap').position().top)
    function swipeU(classname) {   
        // if (timeoutU) return;
        // timeoutU = setTimeout(function () {
        $('#mq-production').swipeUp(
            function () {
                // list.each(function(item,index){
                //     $(this).removeClass('opa');
                // });
                if (timeoutD) {timeoutD = undefined}
                if (timeoutU) return false;
                timeoutU = setTimeout(() => {
                    console.log(timeoutU);                   
                    let list = $(classname).find('.innerContent');
                    let box = $(classname).find('.innerwrap');
                    var pos = box.position();
                    // console.log(pos.top);   
                    $(classname).find('.innerwrap').find('.innerContent').each(function (item, index) {
                        $(this).removeClass('opa');
                    });
                    // document.documentElement.scrollTop=100;
                    // console.log(document.documentElement.scrollTop);
                    // if(box.position().top/rem <= -160/rem&&box.position().top/rem===Math.ceil(box.position().top/rem)){
                    if (box.position().top / rem <= -160 / rem) {    
                        box.css({
                            position: 'relative',
                            // top: Math.ceil(pos.top/rem + 160/rem)+'rem',
                            top: pos.top / rem + 160 / rem + 'rem',
                                // left: pos.left
                        });
                        console.log(box.position().top / rem);
                        switch (pos.top / rem) {
                            case -800 / rem:
                                // list.each(function(item,index){
                                //     $(this).removeClass('opa');
                                // });
                                $(list[4]).addClass('opa1');
                                break;
                            case -640 / rem:
                                $(list[3]).addClass('opa1');
                                break;
                            case -480 / rem:
                                // box.addClass('opa');
                                // console.log($(list[1]));
                                $(list[2]).addClass('opa1');
                                console.log(1);    
                                break;
                            case -320 / rem:
                                $(list[1]).addClass('opa1');
                                // console.log(list[2]);
                                break;
                            case -160 / rem:
                                $(list[0]).addClass('opa1');
                                // console.log(list[3]);
                                    break;
                            case 0:
                                $(list[0]).addClass('opa1');
                                // console.log(list[4]);
                                break;
                            default:
                                break;
                        }
                    }
                    timeoutU = undefined
                }, 1200);
            }   
        )
        // }, 6000);
        // console.log($(classname).find('.innerwrap').position().top)    
    }!(() => { 
        swipeU(lastId)   
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
    // }
    // // content.onmousemove = debounce(count,1000);
