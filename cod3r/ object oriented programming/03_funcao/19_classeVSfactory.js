class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`My name is ${this.nome}`);
  }
}

const pessoa1 = new Pessoa('Roberto')
pessoa1.falar()

console.log(pessoa1);