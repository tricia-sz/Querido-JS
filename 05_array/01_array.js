console.log(typeof  Array, typeof new Array, typeof []);

// Instantiating an array
let aproved = new Array('Bia', 'Carlos', 'Ana')
console.log(aproved);

// Literal notation
 aproved = ['Bia', 'Carlos', 'Ana']

 console.log(aproved[0]); // Bia
 console.log(aproved[1]); // Carlos
 console.log(aproved[2]); // Ana
 console.log(aproved[3]); // undefined #Because index 3, does not exists

 // WAYS ADDED NEW ELEMENT IN ARRAY:

// Used usually to replace element in array
aproved[3] = 'Paulo'

// Added element in the last posisition of array
aproved.push('Deodoro')

console.log(aproved.length);

aproved[9] = 'Rafael'
console.log(aproved.length);
console.log(aproved[8] === undefined)

console.log(aproved);

//aproved.sort() // change original array
console.log(aproved);

 delete aproved[1]

 console.log(aproved[1]); //undefined 
 console.log(aproved[2]); 

// splice() add and/or delete elements in determined indice of array.

 aproved = ['Bia', 'carlos', 'Rafa']
 aproved.splice(1,1, 'John Due', 'Sarah Connor')

 console.log(aproved);





