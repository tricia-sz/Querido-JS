const saudacao2 = 'Bom dia'; // contexto lexico 2

function exec() {
  // par nome/valor
  const saudacao = 'Bom fds'; // contexto lexico 2

  return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor chave/valor

const cliente = {
  nome: 'Pedro',
  idade: 13,
  peso: 50,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 23,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
