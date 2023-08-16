const pessoa = {
  nome: 'Elena',
  idade: 2,
  peso: 12
}

console.log(Object.keys(pessoa)); // retorn somente a chave do obj
console.log(Object.values(pessoa)); // retorn somente valor
console.log(Object.entries(pessoa)); // Retorna um array com chave e valor do que era obj

Object.entries(pessoa).forEach( e => console.log(`${e[0]}: ${e[1]}`))

// Object.assing , nada mais é que a concatenacao de todos os attrs de um objeto dentro de um novo

const destino = {a: 1}
const vaga1 = {b: 2}
const vaga2 = {c: 1, a: 3}
const obj = Object.assign(destino, vaga1,vaga2)

console.log("Obj",obj);