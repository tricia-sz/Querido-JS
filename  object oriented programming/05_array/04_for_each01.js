//Usado para percorrer um array

const aprovados = ['Tricia', 'Luiz', 'Ana', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
  console.log(`Id: ${indice + 1} Nome: ${nome}`);
})


aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados)