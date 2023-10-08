const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falar = pessoa.falar;

falar(); // conflito de paradigmas: funcional e POO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

/* 
  O BIND é o metodo responsavel por amarrar um determinado objeto para
  ele ser o dono da execução daquele metodo sempre que este metodo for chamado.

*/
