// Map GERA UM NOVO ARRAY, DO MESMO TAMNHO com dados TRANSFORMADOS.
// Map pode receber 3 parametros: o proprio valor, o indice e um array 

 const nemeros = [1, 2, 3, 4, 5]

//For com propsito
let resultado = nemeros.map(function(e) {
  return e * 2
}) 


console.log(resultado, nemeros);

const soma10 = e => e + 10
const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nemeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
