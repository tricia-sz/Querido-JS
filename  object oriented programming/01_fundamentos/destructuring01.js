//novo recurso es2015

//Maneiras de desestruturar um objeto

const pessoa = {
  nome: 'Arthur',
  idade: 5,
  endereco: {
    rua: 'Sao Tome',
    numero: 123,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: NomeDaPessoa, idade: idadeDaPessoa } = pessoa;

console.log(NomeDaPessoa, idadeDaPessoa);

const {
  endereco: { rua, numero, cep },
} = pessoa;

console.log(NomeDaPessoa, idadeDaPessoa, cep);
