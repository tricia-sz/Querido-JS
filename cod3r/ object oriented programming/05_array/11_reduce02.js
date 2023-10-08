const alunos = [
  {nome: 'fulano', nota: 7.3, bolsista: false},
  {nome: 'ciclano', nota: 7.3, bolsista: true},
  {nome: 'beltrano', nota: 7.3, bolsista: false},
  {nome: 'otolano', nota: 7.3, bolsista: true},
]

// desafio 1: Todos os alunos sao bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));