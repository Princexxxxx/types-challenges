"use strict";
/**
 * !函数节流: n秒内回调函数只会被执行一次，先执行后计算。
 * 函数节流的目的是为了让函数在特定时间内执行一次，用setTimeout实现，执行完回调将timer置空。
 *
 * @param this
 * @param func
 * @param time
 */
const throttle = function (func, time) {
    let timer = null;
    return (...args) => {
        if (!timer) {
            func.apply(this, args);
            timer = window.setTimeout(() => {
                if (timer)
                    clearInterval(timer);
                timer = null;
            }, time);
        }
    };
};
