function Fruta() {}

console.log(Fruta.prototype);
const uva = new Fruta
const laranja = new Fruta

console.log(uva.__proto__ === laranja.__proto__);
console.log(Fruta.prototype === uva.__proto__);
console.log(Fruta.prototype === laranja.__proto__);

Fruta.prototype.nome = 'Madura'
Fruta.prototype.falar = function() {
  console.log(`Bom dia, meu nome é ${this.nome} !`);
}

uva.falar()
laranja.falar()


const manga = {}
manga.__proto__ = Fruta.prototype
manga.nome = 'Manga'
manga.falar()

// Resumo 
console.log((new Fruta).__proto__ === Fruta.prototype)
console.log(Fruta.__proto__ === Fruta.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === undefined);