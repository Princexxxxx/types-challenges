type K00 = keyof any;
type K01 = keyof unknown;

interface IK {
    name: K00;
}

const obj: IK = {
    name: `Peter`,
};

const foo = () => {
    throw new Error('err');
};

//
// -------------------- keyof ------------------------
//
interface User {
    name: string;
    age: number;
}

type UserK = keyof User; // name | age

//
// -------------------- keyof typeof ------------------------
//
const user = {
    name: 'Peter',
    age: 23,
};

type UserKey = keyof typeof user; // typeof 获取属性类型（定义 js 对象，使用 typeof 自动推导）

function getUserInfo(key: UserKey) {
    return user[key];
}

// todo: 如果想要 userName 类型是 string 怎么做？
const userName = getUserInfo('name');
