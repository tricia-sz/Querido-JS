// Function Declaration
function bomDia() {
  console.log("Bom dia");
}

// Function Expression
const boaTarde = function (){
  console.log('Boa tarde');
}

bomDia()
boaTarde() // undefined

function somar(a, b) {
  return a + b
}

let resultado = somar(3, 5,67,89)
console.log(resultado);


resultado = somar(3)
console.log(resultado);
