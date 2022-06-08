"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
};
console.log(lodash_1.pick(obj, ['a', 'c']));
lodash_1.debounce(console.log, 100);
