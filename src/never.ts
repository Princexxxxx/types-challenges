/**
 * Never
 *
 * never类型表示的是那些永不存在的值的类型。
 * 值会永不存在的两种情况：1、函数异常；2、死循环
 *
 * never类型是任何类型的子类型，也可以赋值给任何类型；
 * 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
 * 即使 any也不可以赋值给never。
 */
type Foo = string | number; // union type

/**
 * 收窄类型（discriminated union）
 * !你可以确保 controlFlowAnalysisWithNever 总是穷尽 (exhaust) 了所有 Foo 的可能类型
 *
 * @param foo
 */
function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === 'string') {
        // foo 被收窄为 string 类型
    } else if (typeof foo === 'number') {
        // foo 被收窄为 number 类型
    } else {
        // foo 在这里是 never
        // !假设哪天Foo类型增加了boolean，将会产生编译错误，无法赋值给never类型
        const check: never = foo;
        console.log('[ check ]', check);
    }
}

// 死循环场景
function handleError(msg: string): never {
    throw new Error(msg);
}

const arr1: never[] = []; // 始终是empty * n数组
arr1.length = 4;
// arr2[0] = 1;
