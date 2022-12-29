console.log(7 / 0); // infinity
console.log(7 / 0.000001); //7000000

console.log('10' / 2); // 5
/*
  JS transforma o valor da string em numero e faz a divisao
*/

console.log('10,2' / 2); // NaN
/*
  JS nao reconhece como numero e nao consegue realizar
   a operacao, retornando um NaN (Not a Number)

*/

console.log('Show!' * 2); //Show! Show!

//console.log(10.toString());
console.log((10.3456).toFixed(3)); //10.346
