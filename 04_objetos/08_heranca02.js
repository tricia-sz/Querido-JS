// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C' }

console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);
console.log(filho.attr0);
