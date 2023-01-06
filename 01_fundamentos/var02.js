var numero = 1;

{
  var numero = 2;
  console.log('dentro do escopo = ', numero);
}

console.log('fora do escopo = ', numero);

// fuja do escopo global
