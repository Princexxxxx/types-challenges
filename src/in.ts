interface UserInfo {
    name: string;
    age: number;
    tel: number;
    address: {
        city: string;
        street: string;
    };
}

interface PreviewUserInfo {
    name: string;
    address: {
        city: string;
        street: string;
    };
}

/**
 * in 操作符 查找类型
 */
type PreviewUserInfo_In = {
    [K in 'name' | 'address']: UserInfo[K];
};

type PreviewUserInfo_Pick = Pick<UserInfo, 'name' | 'address'>;
