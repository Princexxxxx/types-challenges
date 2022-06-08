import { curry } from 'lodash';

const sum = (a: number, b: number, c: number): number => a + b + c;

const add = curry(sum);

console.log('[ add(1)(2)(3) ]', add(1)(2)(3));
console.log('[ add(1, 2)(3) ]', add(1, 2)(3));
