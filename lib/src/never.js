"use strict";
/**
 * 收窄类型（discriminated union）
 * !你可以确保 controlFlowAnalysisWithNever 总是穷尽 (exhaust) 了所有 Foo 的可能类型
 *
 * @param foo
 */
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        // foo 被收窄为 string 类型
    }
    else if (typeof foo === 'number') {
        // foo 被收窄为 number 类型
    }
    else {
        // foo 在这里是 never
        // !假设哪天Foo类型增加了boolean，将会产生编译错误，无法赋值给never类型
        const check = foo;
        console.log('[ check ]', check);
    }
}
// 死循环场景
function handleError(msg) {
    throw new Error(msg);
}
const arr1 = []; // 始终是empty * n数组
arr1.length = 4;
// arr2[0] = 1;
