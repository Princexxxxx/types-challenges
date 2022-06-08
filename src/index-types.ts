// 索引类型（Index types）
// 使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的JavaScript模式是从对象中选取属性的子集。

/**
 * 下面是如何在TypeScript里使用此函数，通过 索引类型查询 和 索引访问操作符
 *
 * @param o
 * @param names
 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map((n) => o[n]);
}

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Jarid',
    age: 35,
};

const names: string[] = pluck(person, ['name']); // ok, string[]
console.log('[ names ]', names);

const ages: number[] = pluck(person, ['age']); // ok, number[]
console.log('[ ages ]', ages);
