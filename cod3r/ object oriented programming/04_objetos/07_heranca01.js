const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const fusca = {
  modelo: 'Fk70',
  velMax: 200
}

console.log(ferrari.__proto__);
console.log(fusca.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype); //true
console.log(ferrari.__proto__ === Object.prototype); //true

console.log(Object.prototype.__proto__);// null
console.log(Object.prototype.__proto__ === null); //true