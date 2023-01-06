// Nao existe um operador XOR (OU EXCLUSIVO) em JS
// const comprarTV32 = !!(trabalho1 ^ trabalho2); // bitwise xor

function compra(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTV50 = trabalho1 && trabalho2;
  const comprarTV32 = trabalho1 != trabalho2; //  XOR
  const manterSaudavel = !comprarSorvete; // operador unário
  return {
    comprarSorvete,
    comprarTV50,
    comprarTV32,
    manterSaudavel,
  };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
