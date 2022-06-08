'use strict';
// 实现interface
class Programmer {
    // todo: TS支持类私有属性
    // https://github.com/tc39/proposal-class-fields
    // #money: number = 1000;
    constructor(name, age) {
        this.age = 30;
        this.name = name;
        this.age = age;
    }
    say() {
        return `${this.name} has 100 RMB`;
    }
}
// 继承
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
