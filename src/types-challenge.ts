/**
 * From T, pick a set of properties whose keys are in the union K
 *
 * 知识点：keyof属性键 + in迭代 + extends类型约束 + 索引签名
 *
 * keyof T 表示获取 T 类型中所有属性键，组成联合类型
 * keyof T 是一个整体，它表示一个联合类型。U extends Union这一整段表示 U的类型 被收缩在一个联合类型的范围内。
 *
 * 【阿宝哥 —— TS条件类型】
 * https://www.bilibili.com/video/BV1HR4y1N7ea?spm_id_from=333.999.0.0&vd_source=579a28a5e5c38d52566c73d9170e14bb
 *
 * 【TS 一些工具泛型的使用及其实现】
 * https://zhuanlan.zhihu.com/p/40311981
 */
/**
 * Exclude from T those types that are assignable to U
 */
export type MyExclude<T, U> = T extends U ? never : T;

// 'a' extends 'a' ? never : T; => never
// 'b' extends 'a' ? never : T; => 'b'
// T5: never | 'b' => 'b'
export type T5 = MyExclude<'a' | 'b', 'a'>;

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Make all properties in T optional
 */
export type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

type People = {
    name: string;
    age: number;
};
export const person: Partial<People> = {
    name: 'Peter',
    age: 30,
};

/**
 * !Egg.js config.default.ts
 *
 * TS 的 Conditional Types（条件类型）是我们能完美解决 Config 提示的关键。有兴趣的可以看下 egg/index.d.ts 里面的 PowerPartial 实现
 *
 * Powerful Partial, Support adding ? modifier to a mapped property in deep level
 * @example
 * import { PowerPartial, EggAppConfig } from 'egg';
 *
 * // { view: { defaultEngines: string } } => { view?: { defaultEngines?: string } }
 * type EggConfig = PowerPartial<EggAppConfig>
 */
export type PowerPartial<T> = {
    [U in keyof T]?: T[U] extends object ? PowerPartial<T[U]> : T[U];
};
