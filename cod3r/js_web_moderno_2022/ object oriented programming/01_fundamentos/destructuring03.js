// Objeto dentro de parametros de funcao

function rand({ min = 0, max = 10 } = {}) {
  const valor = Math.random() * (max - min) + min;

  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };

console.log(rand(obj));
console.log(rand({ min: 10, max: 60 }));
