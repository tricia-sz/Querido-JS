/*
  Forma antiga antes do spread Operator
  Recuperando params atraves do arguments

  TODA FUNCAO TEM UM ARRAY INTERNO DISPONIVEL, 
  quando nenhum parametro é passado, esse array fica vazio.

  ## Existe um UM RECURSO NOVO no ES6: REST/SPREAD OPERATOR
*/

function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }

  return soma;
}

console.log(soma()); // 0 porque nao entrou no for
console.log(soma(1)); // adionou o parametro no arguments
console.log(soma(1.1, 2.2, 3.4)); //somou todos os elemetos
console.log(soma('a', 'b', 'c')); //somou todos os elemetos
