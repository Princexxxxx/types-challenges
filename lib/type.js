"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const sum = (a, b, c) => a + b + c;
const add = lodash_1.curry(sum);
console.log('[ add(1)(2)(3) ]', add(1)(2)(3));
console.log('[ add(1, 2)(3) ]', add(1, 2)(3));
