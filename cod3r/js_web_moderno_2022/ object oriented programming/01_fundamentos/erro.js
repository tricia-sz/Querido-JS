// Mecanismo de tratamento de erro.

function tratarErroELancar(erro) {
  //throw new Error('Mensagem de erro');
  throw {
    nome: erro.name,
    msg: error.mesage,
    date: new Date(),
  };
}

function imprimeNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log('final');
  }
}

const obj = { nome: 'Rodrigo' };
imprimeNomeGritado(obj);
