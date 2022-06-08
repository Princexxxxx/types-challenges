/**
 * 与any一样，都可以作为所有类型的「顶级类型」，但 unknow更加严格，那么可以说除了any 之下的第二大类型，对比下any主要严格于以下两点：
 *
 * 1、unknow会对值进行检查，而类型any不会做检测检查。
 * 2、any类型可以赋值给任何类型，但unknow只能赋值给unknow类型和any类型
 *
 * !unknow不允许定义的值有任何操作（如 方法，new等），但any可以
 */

let a: unknown;
a = 1;

let b: unknown;
b = a; // ok

// let c: string = a; // Error, 不能将类型“unknown”分配给类型“string”
// a(); // Error, 对象的类型为 "unknown"

const Foo2 = (str: unknown) => {
    return str;
};

const msg = Foo2('abc');

let lowerStr: string;

// lowerStr = msg.toLowerCase(); // Error, 对象的类型为 "unknown"

// 缩小未知范围
lowerStr = (typeof msg === 'string' && msg.toLowerCase()) || ''; // typeof
lowerStr = (msg as string).toLowerCase(); // 类型断言
