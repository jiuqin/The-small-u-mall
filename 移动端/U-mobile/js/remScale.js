// JavaScript Document
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {				
            var clientWidth = docEl.clientWidth; //获取设备尺寸       
            if (!clientWidth) return;
            if(clientWidth>=750){ //设计稿宽度
                 docEl.style.fontSize = '100px';
            }else{								
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false); //绑定事件
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
})(document, window);