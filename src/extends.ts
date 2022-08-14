//
// -------------------- TS 2.8 ------------------------
// https://www.tslang.cn/docs/release-notes/typescript-2.8.html
//
interface U1 {
    name: string;
    age: number;
}

interface U2 {
    name: string;
}

let obj1: U1 = {
    name: 'aaa',
    age: 123,
};

let obj2: U2 = obj1; // 子类对象 可以赋值给 父类对象（父类比子类的限制更少，能满足子类，则一定能满足父类）
console.log('[ obj2 ]', obj2);

// !概念：T extends U ? X : Y —— 如果 T包含的类型 是 U包含的类型的「子集」，那么取结果X，否则取结果Y
export type A = 'x' extends 'x' | 'y' ? string : number;

export type A1 = 'x' extends 'x' ? string : number; // string
export type A2 = 'x' | 'y' extends 'x' ? string : number; // number

// !满足两个要点即可适用「分配律」：第一，参数是泛型类型，第二，代入参数的是联合类型
type P<T> = T extends 'x' ? string : number;
export type A3 = P<'x' | 'y'>; // ??? string | number

// never是所有类型的子类型
export type A4 = never extends 'x' ? string : number; // string

// 实际上，这里还是「条件分配类型」在起作用。never被认为是空的联合类型。
// 也就是说，没有联合项的联合类型，所以还是满足上面的分配律，然而因为没有联合项可以分配，所以P<T>的表达式其实根本就没有执行。
// 所以A2的定义也就类似于永远没有返回的函数一样，是never类型的。
export type P1<T> = T extends 'x' ? string : number;
export type A5 = P<never>; // never

// 使用 Exclude，从类型T中排除掉所有包含的U属性
export type B = Exclude<'key1' | 'key2', 'key2'>;

// 等价于
export type B1 = Exclude<'key1', 'key2'> | Exclude<'key2', 'key2'>;

// =>
export type B2 = ('key1' extends 'key2' ? never : 'key1') | ('key2' extends 'key2' ? never : 'key2');

// =>
// never是所有类型的子类型
export type B3 = 'key1' | never;

export type T4 = Exclude<'a' | 'b', 'a'>;
