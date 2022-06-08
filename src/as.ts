/**
 * 「类型断言」的意义就等同于你在告诉程序，你很清楚自己在做什么，此时程序自然就不会再进行额外的属性检查了。
 */
interface AsProps {
    name: string;
    age: number;
    money?: number;
}

let p1 = {
    name: '兔神',
    age: 25,
    money: -100000,
    girl: false,
} as AsProps; // OK

//
// -------------------- 非空断言 ------------------------
//
// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。
// 具体而言，x! 将从 x 值域中排除 null 和 undefined 。
let str: null | undefined | string;
str!.toString();
