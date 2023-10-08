const escola = 'Cod3R';

console.log(escola.charAt(4)); // R

console.log(escola.charAt(5)); //

console.log(escola.charCodeAt(3)); // 3

console.log(escola.indexOf('3')); // 3

console.log(escola.substring(2)); // d3R

console.log(escola.substring(0, 3)); // cod

console.log('Escola '.concat(escola).concat('!!!')); //Escola Cod3R!!!

console.log(escola.replace(3, 'e')); // cod

console.log('Ana, Maria, Pedro'.split(',')); // [ 'Ana', ' Maria', ' Pedro' ]

// template string

const nome = 'Rebeca';

const concatencao = 'Ola' + nome + '!!!';

const template = ` Olá ${nome} !`;

console.log(concatencao, template);


