// Armazenar o this em uma const, no momento que o this aponta para o objeto que precisa ser referenciado.
function Pessoa() {
  this.idade = 0;

  const self = this;

  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
