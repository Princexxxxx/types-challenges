import { pick, debounce as MyDebounce } from 'lodash';

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
};

console.log(pick(obj, ['a', 'c']));

MyDebounce(console.log, 100);
