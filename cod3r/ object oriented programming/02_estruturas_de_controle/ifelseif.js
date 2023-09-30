Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Quadro de honra');
  } else if (nota.entre(7, 8)) {
    console.log('Aprovado');
  } else {
    console.log('Reprovado');
  }
};

imprimirResultado(5);
imprimirResultado(7);
imprimirResultado(9);
