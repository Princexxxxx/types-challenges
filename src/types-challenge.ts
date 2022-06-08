/**
 * From T, pick a set of properties whose keys are in the union K
 *
 * 知识点：keyof属性键 + in迭代 + extends类型约束 + 索引签名
 *
 * keyof T 表示获取 T 类型中所有属性键，组成联合类型
 * keyof T 是一个整体，它表示一个联合类型。U extends Union这一整段表示 U的类型 被收缩在一个联合类型的范围内。
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

/**
 * !Egg.js config.default.ts
 *
 * TS 的 Conditional Types 是我们能完美解决 Config 提示的关键。有兴趣的可以看下 egg/index.d.ts 里面的 PowerPartial 实现
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
