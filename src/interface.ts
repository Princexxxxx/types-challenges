/**
 * 接口是抽象，可以描述对象、函数、类；可实现，可继承
 */

interface IProgrammer {
    name: string;
    age: number;
    say(msg: string): string;
}

type ProgrammerType = 'Frontend' | 'Backend' | 'Database';

//
// -------------------- 类实现interface ------------------------
//
class Programmer implements IProgrammer {
    name: string;
    age: number;

    // todo: TS支持类私有属性
    // https://github.com/tc39/proposal-class-fields
    // #money: number = 1000;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say(msg: string) {
        return `${this.name} say ${msg}`;
    }
}

//
// -------------------- 类继承 ------------------------
//
class Fontend extends Programmer {
    type = 'Fontend';

    // todo: args类型声明
    // constructor(...args: (string | number)[]) {
    //     super(...args);
    // }

    constructor(name: string, age: number) {
        super(name, age);
    }
}

const p = new Fontend('John', 30);
console.log('[ p ]', p);

//
// -------------------- 函数 ------------------------
//
interface IFoo {
    (a: string, b: string, c: string): string;
}

const Foo: IFoo = (...args) => {
    return args.join('-');
};

console.log('[ Foo ]', Foo('a', 'b', 'c'));

//
// -------------------- 只读属性 ------------------------
//
const arr: ReadonlyArray<string> = ['a', 'b'];
// arr[1] = 'c'; // 类型“readonly string[]”中的索引签名仅允许读取。

//
// -------------------- 任意属性 ------------------------
//
interface IPerson {
    name: string;
    age: number;
    [propName: string]: string | number; // !索引签名 —— 前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
}

interface X {
    a: number;
    b: string;
}

type Y = Pick<X, 'a'>;
