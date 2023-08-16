// O FOR IN nao retorna as notas em si, retorna o indice dos elementos e nao pelos valores.

const notas = [6.7, 7.7, 9.6, 8.2];

for (let i in notas) {
  console.log(i, notas[i]);
}
const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 28,
  peso: 67,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
