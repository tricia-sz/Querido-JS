const peso1 = 1.4;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const validacao1 = 9.768;
const validacao2 = 3.768;

const total = validacao1 * peso1 + validacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
// .toFixed() - > fixa um numero especifico de casas decimais a serem respeitadas. Nesse caso, 2.
