"use strict";
/**
 * !this parameters
 * Unfortunately, the type of this.suits[pickedSuit] is still any.
 * That’s because this comes from the function expression inside the object literal. To fix this, you can provide an explicit this parameter.
 * this parameters are fake parameters that come first in the parameter list of a function:
 *
 * @param this
 */
function f() {
    // make sure `this` is unusable in this standalone function
}
/**
 * !函数防抖: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时，先计算时间后执行。
 *
 * TypeScript 提供了一种机制，可以在函数入参列表中第一个位置处，手动写入 this 标识其类型。
 * 但这个 this 入参只作为一个形式上的参数，供 TypeScript 做静态检查时使用，编译后是不会存在于真实代码中的。
 *
 * @param fn
 * @param delay
 */
const debounce = (fn, delay = 0) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};
debounce(console.log, 500);
