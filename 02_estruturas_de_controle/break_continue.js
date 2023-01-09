/* 
  DESVIOS DE FLUXO: BREAK & CONTINUE:
  BREAK:
   automaticamente causa o desvio de fluxo no switch, for, while. 
   nao enfluencia no if.
  O BREAK NAO EXECUTA EM IF E SIM NO BLOCO/ESCOPO MAIS MAIS 
  PROXIMO QUE SEJA: FOR, WHILE ou SWITCH 

  CONTNUE:
   functiona dentro de laços FOR e WHILE.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i in numeros) {
  if (i == 5) {
    break;
  }

  console.log(`indice: ${i} numero: ${numeros[i]}`);
}

for (y in numeros) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${numeros[y]}`);
}

externo: for (a in numeros) {
  for (b in numeros) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}
