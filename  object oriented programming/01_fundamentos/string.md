```js
const escola = 'Cod3R';

console.log(escola.charAt(4)); // R

console.log(escola.charAt(5)); //

console.log(escola.charCodeAt(3)); // 3

console.log(escola.indexOf('3')); // 3

console.log(escola.substring(2)); // d3R

console.log(escola.substring(0, 3)); // cod

console.log('Escola'.concat(escola).concat('!!!')); //EscolaCod3R!!!

console.log('Ana, Maria, Pedro'.split(',')); // [ 'Ana', ' Maria', ' Pedro' ]
```

- chartAt( )

  > Usado para acessar o INDICE de uma string

- .charCodeAt( )

  > Busca o indice do código que vem na tablea ascii

  > Se passar um indice fora do tamanho da strig? #Retorna um valor vazio

- indexOf( )

  > Usado quando se tem o VALOR e quer saber onde o INDICE está

- substring( )

  > Faz a leitura e retorna os VALORES a partir do índice especificado

- substring( )

  > Retorna os valores a partir do indice repassado no parametro.

- concat( )
  > Concatena strings literais com variaveis
- replace(3, 'e')

  > Usado para trocar valores. Onde o primeiro parametro se trata do valor a ser substituido e o segundo o valor para qual que irá substituir.

- .split(',')

  > Transforma uma string literal em um array. Separado pelo valor passado por parametro. Nesse caso, a virugula " , "
