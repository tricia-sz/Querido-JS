const valores = [7, 6, 9, 2, 1, 4, 7.8, 5.4];

console.log(valores[0], valores[3]); // 7 2
console.log(valores[4]); //1

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
