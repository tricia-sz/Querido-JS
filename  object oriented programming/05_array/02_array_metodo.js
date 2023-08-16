const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// remove the last element
pilotos.pop()
console.log(pilotos);

pilotos.push('Verstanppen')
console.log(pilotos);

// remove the first element
pilotos.shift()
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

// add element witch splice()
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);


// remove witch splice()
pilotos.splice(3)
console.log(pilotos);

// generate new array
const algunsPilotos = pilotos.slice(1,4)
console.log(algunsPilotos);


