// criar de forma literal
function func1() {}

// Armazenar em uma variavel
const func2 = function () {};

// Armazenar em um ARRAY
const array = [
  function (a, b) {
    return a + b;
  },

  func1,
  func2,
];

console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};

obj.falar = function () {
  return 'Opa';
};

console.log(obj.falar());

// Passar funcao como param
function run(fun) {
  fun();
}

run(function () {
  console.log('Executando...');
});

// Uma funcao pode retornar / conter uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
// Invocando funcoes aninhadas:
soma(2, 3)(1);

// ou armazenar emn uma variavel e passar o valor da function interna.
const doisMaisTres = soma(2, 3);

doisMaisTres(1);

//_____________________________________________________________________________________________________
/*
  - Funcao de primeira Classe ou Funcao de primeira linha ou 
  - Higher-order function : ou seja, voce pode tratar a funcao como  um dado.

  Quando se usa uma funcao de primeira linha, voce pode passar uma funcao como parametro,
  armazenar em uma variaveis, ter outra funcao dentro dela. Abrindo um leque de possibilidades.

*/

/*
  Declarar funcao de forma literal: 
  - pode receber parametros e pode retornar valor.
  - o retorno é opcional, caso nao retore nada, é padrao retornar undefined.
*/
