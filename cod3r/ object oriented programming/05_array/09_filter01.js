Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
}
const produtos = [
  {nome: 'notebook', preco: 1324, fragil: true},
  {nome: 'caneta', preco: 6, fragil: false},
  {nome: 'celular', preco: 245, fragil: false},
  {nome: 'mesa', preco: 2, fragil: true},
  {nome: 'caixa de som', preco: 23, fragil: false},
  {nome: 'guitar', preco: 456, fragil: false},
]

console.log(produtos.filter(function(p) {
  return true
}))

 const caro = produto => produto.preco >= 250
 const fragil = produto => produto.fragil

 console.log(produtos.filter2(caro).filter2(fragil))