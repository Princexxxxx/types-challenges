/**
 * 泛型工具类型
 */

//
// --------------------- typeof -----------------------
//
// typeof的主要用途是在类型上下文中获取变量或者属性的类型
interface Person {
    name: string;
    age: number;
}

const sem: Person = { name: 'semlinker', age: 30 };
type Sem = typeof sem; // type Sem = Person

// 此外，typeof 操作符除了可以获取对象的结构类型之外，它也可以用来获取函数对象的类型，比如：
function toArray(x: number): Array<number> {
    return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]

//
// --------------------- keyof -----------------------
//
// keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
interface Person {
    name: string;
    age: number;
}

type Key = keyof Person;
