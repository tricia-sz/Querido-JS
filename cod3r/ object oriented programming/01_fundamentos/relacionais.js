console.log('01)', '3' == 3); // true #igual mas nao do mesmo tipo

console.log('02)', '3' === 3); // false #a string '3' nao e do mesmo tipo do number 3

//diferente
console.log('03', '3' != 3);

// estritamente diferente
console.log('04', '3' !== 3);

console.log('05', 3 < 2);
console.log('06', 3 > 2);
console.log('07', 3 <= 2);
console.log('08', 3 >= 2);

const day1 = new Date(0);
const day2 = new Date(0);

console.log('09', day1 === day2);
console.log('10', day1 == day2);
