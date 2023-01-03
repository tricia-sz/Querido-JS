// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(1, 3); // 4

imprimirSoma(3); //
imprimirSoma(3, 2, 4, 56, 7, 8, 9);
imprimirSoma();

// Funcao sem retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));

soma(2);

console.log(soma(1)); 
console.log(soma()); // NaN


