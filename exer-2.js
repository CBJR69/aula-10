function esperarSegundos(segundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(`Esperei ${segundos} segundos`);
        } else {
          reject("Erro simulado!");
        }
      }, segundos * 1000);
    });
  }
  
  // execucao
  esperarSegundos(2)
    .then(mensagem => console.log("Sucesso:", mensagem))
    .catch(erro => console.error("Erro:", erro));
  