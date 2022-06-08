"use strict";
/**
 * 接口是抽象，可以描述对象、函数、类；可实现，可继承
 */
//
// -------------------- 类实现interface ------------------------
//
class Programmer {
    // todo: TS支持类私有属性
    // https://github.com/tc39/proposal-class-fields
    // #money: number = 1000;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say(msg) {
        return `${this.name} say ${msg}`;
    }
}
//
// -------------------- 类继承 ------------------------
//
class Fontend extends Programmer {
    // todo: args类型声明
    // constructor(...args: (string | number)[]) {
    //     super(...args);
    // }
    constructor(name, age) {
        super(name, age);
        this.type = 'Fontend';
    }
}
const p = new Fontend('John', 30);
console.log('[ p ]', p);
const Foo = (...args) => {
    return args.join('-');
};
console.log('[ Foo ]', Foo('a', 'b', 'c'));
//
// -------------------- 只读属性 ------------------------
//
const arr = ['a', 'b'];
