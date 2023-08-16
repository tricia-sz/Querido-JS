// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C' }

console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);
console.log(filho.attr0);

const carro = {
  velAtual: 0,
  velMax: 200, 
  acelerarMais(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'V3',
  status(){
    return `${thius.modelo}km/h de ${super.status()}km/h`
  }
}

Object.setPrototypeOf(ferrari, carro) // Relacao estabelecida entre ferrari e carro. Primeiro voce tem o objeto depois o prototipo
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());

