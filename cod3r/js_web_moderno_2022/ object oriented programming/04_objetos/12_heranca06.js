function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Ate Breve', 456)

console.log(aula1, aula2);


// simulando o new por baixo dos panos

function novo(fc, ...params) {
  const obj =  {}
  obj.__proto__ = fc.prototype
  fc.apply(obj, params) {
    return obj
  }
}


const aula03 = novo(Aula, 'Bem vindo', 123)
const aula04 = novo(Aula, 'Ate breve', 345)
console.log(aula03, aula04);