/*
  Metodo GET, lê variavel
  metodo SET, altera o valor da variavel
*/ 

const sequencia = {
  _valor: 1, // convencao
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }

}

console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 201
console.log(sequencia.valor, sequencia.valor);
