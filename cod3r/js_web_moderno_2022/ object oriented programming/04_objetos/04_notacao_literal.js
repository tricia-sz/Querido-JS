// Melhorias na notacao literal

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj1);
console.log(obj2);

const nomeAttr = 'nota'
const ValorAttr = 6.8

const obj3 = {}
obj3[nomeAttr] = ValorAttr

console.log(obj3);

const obj4 = {
  funcao1: function(){
    //ou...
  },

  funcao2() {
    // dessejeito
  }
}
