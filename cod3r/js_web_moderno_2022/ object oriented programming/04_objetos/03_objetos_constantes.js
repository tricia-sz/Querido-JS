const pessoa = {
  nome: 'Joao'
}
console.log(pessoa);

pessoa.nome = 'Pedro'

console.log(pessoa);

// pessoa -> 345 -> {...}
//pessoa = { nome: 'Lisa'}

Object.freeze(pessoa)
console.log(pessoa);
