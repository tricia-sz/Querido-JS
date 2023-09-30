// JSON é um formato de dados que nao aceita funcoes

//Convertendo objeto em json
const teste = {a: 1, b: 2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(teste));

//console.log(JSON.parse(" {a: 1, b: 2, c:3}"));
console.log(JSON.parse(" {'a': 1, 'b': 2, 'c':3}"));


