const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('Quadro de honra');
      break;
    case 8:
    case 7:
      console.log('Aprovado');
      break;
    case 5:
    case 6:
      console.log('Recuperacao');
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('reprovado');
      break;
  }
};

imprimirResultado(10);
imprimirResultado(9);
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado(5);
imprimirResultado(6);
imprimirResultado(4);
imprimirResultado(3);
imprimirResultado(2);
imprimirResultado(1);
imprimirResultado(0);
