/**
 * 类型别名
 *
 * type会给一个类型起个新名字。
 * type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型。
 * 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。
 * 给基本类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
 *
 */

//
// -------------------- 基本类型 ------------------------
//
type Nmae = string;

//
// -------------------- 联合 & 交叉类型（对比interface extends） ------------------------
//
type Pointx = { x: number };
type Pointy = { y: number };
type PointUnion = Pointx | Pointy;
type PointInterSectXY = Pointx & Pointy;
type PointInterSectXYZ = Pointx &
    Pointy & {
        z: number;
    };

const point: PointInterSectXY = {
    x: 0,
    y: 100,
};

interface IPoint {
    z: number;
}

// 类型别名 扩展 接口 => x, y, z
type TypePoint = PointInterSectXY & IPoint;

// 接口 扩展 类型别名 => x, y, z
interface IPointXY extends PointInterSectXY {
    z: number;
}

//
// -------------------- 元组 Tuple ------------------------
//
type Data = [number, string];
const data: Data = [1, 'a'];

//
// -------------------- Dom ------------------------
//
const $app = document.getElementById('#app');
type App = typeof $app;

//
// -------------------- 函数 ------------------------
//
type FooType = (a: string, b: string, c: string) => string;
const Foo1: FooType = (...args) => args.join('-');

//
// -------------------- 映射类型 ------------------------
//
type Keys = 'name' | 'sex';

type DulKey = {
    [key in Keys]: string; // in 枚举遍历, 类似for...in
};

let stu: DulKey = {
    name: 'wang',
    sex: 'man',
};
