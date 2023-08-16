const fabricantes = ['Mecerdes', 'Audi','BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}` );
}

fabricantes.forEach(imprimir)