// NOTACAO LITERAL DE OBJETO. Objeto é uma coleção de dados, contendo os atributos=  chave: "valor"

const produto = {};

produto.nome = 'Iphone 13';
produto.preco = 3.534;
produto['Desconto Legal'] = 0.4; //evitar attr com espaços

console.log(produto);

const produto2 = {
  nome: 'Camisa Polo',
  preco: 78.99,
  obj: {},
};
