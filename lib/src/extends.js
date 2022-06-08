"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj1 = {
    name: 'aaa',
    age: 123,
};
let obj2 = obj1; // 子类对象 可以赋值给 父类对象（父类比子类的限制更少，能满足子类，则一定能满足父类）
console.log('[ obj2 ]', obj2);
