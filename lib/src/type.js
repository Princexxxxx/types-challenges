"use strict";
/**
 * 类型别名
 *
 * type会给一个类型起个新名字。
 * type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型。
 * 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。
 * 给基本类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
 *
 */
const point = {
    x: 0,
    y: 100,
};
const data = [1, 'a'];
//
// -------------------- Dom ------------------------
//
const $app = document.getElementById('#app');
const Foo1 = (...args) => args.join('-');
let stu = {
    name: 'wang',
    sex: 'man',
};
