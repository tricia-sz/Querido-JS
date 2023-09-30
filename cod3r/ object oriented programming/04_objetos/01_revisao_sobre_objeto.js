// Colecao dinamica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 3456,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      rua: 'Tamandare',
      numero: 12
    }
  },
  condutores: [
    {
      nome: 'Flavia',
      idade: 18,
    },
    {
      nome: 'Thais',
      idade: 38,
    },
  ],
  calcularValorSeguro: function() {
    // ...
  }

}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['rua'] = 'Av. Liberdade'

console.log(carro);
