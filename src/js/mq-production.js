// import imgUp from './zl-index'
import upIcon from '../../img/icon_up.png'
var width = document.documentElement.clientWidth;
var rem = width / 16;
let timeoutD;
let timeoutU;
let firstId = '#mq-frontEnd';
let secondId = '#mq-backend';
let thirdId = '#mq-android';
let fourthId = '#mq-machineLearning';
let lastId = '#mq-ios';
let a = 1; // 切换页面时，将其置1

//详情页文字
//滑动往上
// !(()=>{
    // console.log(imgUp)
      // 创建提示上滑的提示图片
      let imgUp = new Image();
      let $upPromot =  $('.zl-up-promot')
      imgUp.src = upIcon;
   
      $(imgUp).css({
          height: "auto",
          width: "25px",
          position: "absolute",
          left: "50%",
          top: "93%",
          marginLeft: "-12px"
      })
      $(imgUp).addClass('page-moveIconUp')
      $upPromot.append(imgUp);
      function distance1(classname ) {
        // let list = $(classname).find('.innerwrap').find('.innerContent');
        let box = $(classname).find('.innerwrap');
        var pos = box.position();
        console.log(a) // 2 
        box.css({
            position: 'relative',
            // top: Math.ceil(pos.top/rem - 160/rem) + 'rem',
            top: (-160 / rem)*(a - 1) + 'rem',   // 0 // -160 //320
            // opacity: 1,
            // left: pos.left
        });
      }
      function distance2(classname) {
        let box = $(classname).find('.innerwrap');
        var pos = box.position();
        console.log(a)
        box.css({
            position: 'relative',
            // top: Math.ceil(pos.top/rem + 160/rem)+'rem',
            top: (-160 / rem)*(a - 1) + 'rem',
                // left: pos.left
        });
        $(imgUp).show();
      }
    function swipeU(classname) {
        //  console.log($(classname).find('.innerwrap').position().top)
        // console.log($('#mq-production')[0])
        // $('#mq-production')[0].timeout = 'hah'
        // console.log($('#mq-production')[0].timeout)
        // if (timeoutD) return;
        // timeoutD = setTimeout(function(){
        $('#mq-production').swipeUp(    
            function () {
                // console.log(a++)
                // console.log(timeoutD, '11111')
                if (timeoutD) {timeoutD = undefined}
                if (timeoutU) return false;
                // timeoutU = setTimeout(() => {
                    // console.log(timeoutD);
                    let list = $(classname).find('.innerContent');
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
                        // console.log(box.position().top / rem);
                        // console.log(pos.top / rem);
                        // console.log(-160 / rem);
                        
                        //   debugger
                        
                        // switch (pos.top / rem) {
                        //     case 0:
                        //         $(list[1]).addClass('opa');
                        //         break;
                        //     case -160 / rem:
                        //         // box.addClass('opa');

                        //         console.log($(list[1]));
                        //         $(list[2]).addClass('opa');
    
                        //         break;
                        //     case -320 / rem:
                        //         $(list[3]).addClass('opa');
                        //         // console.log(list[2]);
                        //         break;
                        //     case -480 / rem:
                        //         $(list[4]).addClass('opa');
                        //         // console.log(list[3]);
    
                        //         break;
                        //     case -640 / rem:
                        //         $(list[5]).addClass('opa');
                        //         // console.log(list[4]);
    
                        //         break;
                        //     default:
                        //         break;
                        // }
                        switch (++a) {
                            case 2:
                                $(list[1]).addClass('opa');
                                distance1(classname)
                                break;
                            case 3:
                                // box.addClass('opa');

                                console.log($(list[1]));
                                $(list[2]).addClass('opa');
                                distance1(classname)
                                break;
                            case 4:
                                $(list[3]).addClass('opa');
                                // console.log(list[2]);
                                distance1(classname)
                                break;
                            case 5:
                                $(list[4]).addClass('opa');
                                // console.log(list[3]);
                                distance1(classname)
                                break;
                            case 6:
                                $(list[5]).addClass('opa');
                                // console.log(list[4]);
                                distance1(classname)
                                $(imgUp).hide();
                                break;
                            default:
                                a = 6;
                                break;
                        }
                    }   
                    console.log(a);
                    timeoutU = undefined
                // }, 100)
            }   
        )
        // },6000);    
    }   
    !(() => {    
        swipeU(lastId)
    })();
    // })();
    //滑动往下
    // !(()=>{
    // $('.innerContent').each(function(item,index){
    //         $(this).removeClass('opa');
    //     });
    // console.log($('#innerwrap').position().top)
    function swipeD(classname) {   
        // if (timeoutU) return;
        // timeoutU = setTimeout(function () {
        $('#mq-production').swipeDown(
            function () {
                // list.each(function(item,index){
                //     $(this).removeClass('opa');
                // });
                if (timeoutU) {timeoutU = undefined}
                if (timeoutD) return false;
                // timeoutD = setTimeout(() => {
                    // console.log(timeoutU);                   
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
                        // $(imgUp).hide()    
                        
                        console.log(box.position().top / rem);
                        // switch (pos.top / rem) {
                        //     case -800 / rem:
                        //         // list.each(function(item,index){
                        //         //     $(this).removeClass('opa');
                        //         // });
                        //         $(list[4]).addClass('opa1');
                        //         break;
                        //     case -640 / rem:
                        //         $(list[3]).addClass('opa1');
                        //         break;
                        //     case -480 / rem:
                        //         // box.addClass('opa');
                        //         // console.log($(list[1]));
                        //         $(list[2]).addClass('opa1');
                        //         console.log(1);    
                        //         break;
                        //     case -320 / rem:
                        //         $(list[1]).addClass('opa1');
                        //         // console.log(list[2]);
                        //         break;
                        //     case -160 / rem:
                        //         $(list[0]).addClass('opa1');
                        //         // console.log(list[3]);
                        //             break;
                        //     case 0:
                        //         $(list[0]).addClass('opa1');
                        //         // console.log(list[4]);
                        //         break;
                        //     default:
                        //         break;
                        // }
                        switch (a--) {
                            case 6:
                                // list.each(function(item,index){
                                //     $(this).removeClass('opa');
                                // });
                                $(list[4]).addClass('opa1');
                                distance2(classname)
                                break;
                            case 5:
                                $(list[3]).addClass('opa1');
                                distance2(classname)
                                break;
                            case 4:
                                // box.addClass('opa');
                                // console.log($(list[1]));
                                $(list[2]).addClass('opa1');
                                distance2(classname)
                                console.log(1);    
                                break;
                            case 3:
                                $(list[1]).addClass('opa1');
                                distance2(classname)
                                // console.log(list[2]);
                                break;
                            case 2:
                                $(list[0]).addClass('opa1');
                                distance2(classname)
                                // console.log(list[3]);
                                    break;
                            case 1:
                                $(list[0]).addClass('opa1');
                                a = 1;
                                distance2(classname)
                                // console.log(list[4]);
                                break;
                            default:
                                a = 1;
                                break;
                        }
                    }
                    console.log(a)
                    timeoutD = undefined
                // }, 200);
            }   
        )
        // }, 6000);
        // console.log($(classname).find('.innerwrap').position().top)    
    }!(() => { 
        swipeD(lastId)   
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
    // // }
    // // // content.onmousemove = debounce(count,1000);
