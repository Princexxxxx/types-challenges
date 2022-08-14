const readonlyArr: ReadonlyArray<number> = [1, 2, 3];

// 类型“readonly number[]”中的索引签名仅允许读取。ts(2542)
// readonlyArr[2] = 3;

class Page {
    loading = true;

    get isLoading() {
        return this.loading === true;
    }
}

const pageA = new Page();

// class 的 getter，如果没有 setter，默认会自动推导出 readonly 属性
// pageA.isLoading = false; // 无法分配到 "isLoading" ，因为它是只读属性。ts(2540)

/**
 * Make all properties in T readonly
 */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * 内置Readonly工具类型
 */
const readonlyObject: MyReadonly<{ [key: string]: any }> = {
    name: 'Peter',
    age: 30,
    mobile: 13122233355,
};

// readonlyObject.name = 'aaa';
