let valor; // nao inicializada, valor por padrao undefined
console.log(valor);
//console.log(valor2); // ReferenceError: valor2 is not defined

valor = null; // ausencioa de valor
console.log(valor);

//console.log(valor.toString());
//TypeError: Cannot read properties of null (reading 'toString') ocorre quando  o valor se null ou undifined

const produto = {};
console.log(produto.preco);

//dicas: Sempre que for zerar var, lets e consts usar o null 
