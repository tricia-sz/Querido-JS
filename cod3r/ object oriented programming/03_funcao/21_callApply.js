function getPreco(imposto = 0, moeda = 'R$') {
  return ` ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
  nome: 'Notebook',
  preco: 342,
  desc: 0.45,
  getPreco
}

global.preco = 234

global.desc = 0.1

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 45643, desc: 0.21}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));


/*
  A diferenca entre o call e o aply é exatamente a forma como
  os parametros sao repassados.
*/
