/*  
  MANEIRAS DE CRIAR UM OBJETO:
  - Literal
  - Object in JS
  - Function construtora
  - Funcao Factory
  - Object Create
*/


// Usando notacao literal
const obj1 = {}
console.log(obj1);

// Objet em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object
console.log(obj2);

// Funcoes construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * ( 1 - desc)
  }
}

const p1 = Produto('Caneta', 5.99, 0.25)
const p2 = Produto('Notebook', 995.95, 0.30)

// console.log(p1.getPrecoComDesconto());
// console.log(p2.getPrecoComDesconto());

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome, 
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Joao', 7.756, 4)
const f2 = criarFuncionario('Luisa', 11.568, 2)

console.log(f1.getSalario());
console.log(f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Amara'
console.log(filha);

// Uma funcao famosa que retorba um objeto..
const fromJSON = JSON.parse({"info": "Sou um JSON"})

console.log(fromJSON.info);