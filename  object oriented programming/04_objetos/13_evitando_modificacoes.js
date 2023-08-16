// Object.preventExternsions - > Faz com que nenhum atributo a mais seja add no obj
// alterar deletando pode, adicionar novos attr, nao.

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
produto.tag

console.log(produto);

// Object.seal
const pessoa = { nome: 'Juliana', idade: 34}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa);

// Object.freez = selado + valores constantes
