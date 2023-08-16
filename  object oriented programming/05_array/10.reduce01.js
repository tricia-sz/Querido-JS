const alunos = [
  {nome: 'fulano', nota: 7.3, bolsista: false},
  {nome: 'ciclano', nota: 7.3, bolsista: false},
  {nome: 'beltrano', nota: 7.3, bolsista: false},
  {nome: 'otolano', nota: 7.3, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual ) {
  console.log(acumulador, atual);
  return acumulador + atual
}, 10)

console.log(resultado);