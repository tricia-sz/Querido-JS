/*
  O for um bloco de repetição.
  Composto por 3 partes:
    1. Declaração de variavel
    2. Condição que será usado para repetir o bloco.
    3. Incremento. 
*/

const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();
