console.log(Math.ceil(6.1));

const objeto = {};

objeto.nome = 'Bola';
objeto['nome'] = 'Bola22';

console.log(objeto.nome);
console.log(objeto.nome);

function objeto2(nome) {
  this.nome = nome;
}
