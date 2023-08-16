const carrinho = [
'{"nome: "Boracha", "preco": 1.56}',
'{"nome: "Notebook", "preco": 3.700}',
'{"nome: "Caneta", "preco": 1.50}'
]


carrinho.map(function(preco) {
  return preco
})

// return an array only with price

const paraObjeto = item => JSON.parse(item)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);


