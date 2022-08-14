enum Status {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    ERROR = 100,
}

//
// -------------------- 获取枚举的 key 类型 ------------------------
//
type StatusKey = keyof typeof Status;
// 'SUCCESS' | 'DANGER' | 'WARNING'

const keyArr: StatusKey[] = ['SUCCESS', 'DANGER']; // passed

//
// -------------------- 获取枚举的 value 类型 ------------------------
//
type StatusVal = `${Status}`;
// 'success' | 'danger' | 'warning'

const valArr: StatusVal[] = ['success', 'danger', 'warning']; // passed
