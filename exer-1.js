function esperarSegundos(segundos) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Esperei ${segundos} segundos`);
      }, segundos * 1000);
    });
  }
  
  // execução
  esperarSegundos(2).then(mensagem => console.log(mensagem));
  