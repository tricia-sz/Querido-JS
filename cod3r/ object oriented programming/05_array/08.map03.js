Array.prototype.map2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i , this))
  }

  return newArray
}

const carrinho = [
  '{"nome: "Boracha", "preco": 1.56}',
  '{"nome: "Notebook", "preco": 3.700}',
  '{"nome: "Caneta", "preco": 1.50}'
]

// Retorna array apenas com os 
const paraObjeto = item => JSON.parse(item)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map2(apenasPreco)
console.log(resultado);

