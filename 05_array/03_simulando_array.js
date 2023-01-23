// como seria se a partir de um objeto, gerar um array

const quaseArray = {0: 'Rafael', 1: 'Julia', 2: 'Bia'}

console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) },
  enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafa', 'Bia', 'Duke']
console.log(quaseArray.toString(), meuArray);




