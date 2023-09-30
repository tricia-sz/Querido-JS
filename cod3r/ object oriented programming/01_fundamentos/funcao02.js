// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Amazenando uma arrow em uma variavel
const soma = (a, b) => {
  return a + b;
};

console.log(soma(1, 1));

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 4));

const imprimir2 = (a) => console.log(a);

console.log(imprimir2('Nice!'));
