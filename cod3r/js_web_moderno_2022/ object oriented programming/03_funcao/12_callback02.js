const notas = [5.5, 7.8, 3.5, 9.5, 10,4.5]

// Filtrar notas sem usar o callback
let notasBaixas = []
let notasAltas = []

for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixas.push(notas[i])
  } else {
    notasAltas.push(notas[i])
  }
}
console.log("Notas menor que 7: ", notasBaixas);
console.log("Notas maior que 7: ", notasAltas);

// Com Callback
// notasBaixas = notas.filter()
