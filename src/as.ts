/**
 * 「类型断言」的意义就等同于你在告诉程序，你很清楚自己在做什么，此时程序自然就不会再进行额外的属性检查了。
 *
 *  ! <> as
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

function logString(str: string) {
    console.log('[ str ]', str);
}

function log(msg: string | undefined | null) {
    // 类型“string | null | undefined”的参数不能赋给类型“string”的参数。不能将类型“undefined”分配给类型“string”。ts(2345)
    // logString(msg);

    logString(msg!); // 非空断言!
}

//
// -------------------- as & <> ------------------------
//
const button = document.getElementById('button');
console.log((<HTMLButtonElement>button).id);
console.log((button as HTMLButtonElement).id);
