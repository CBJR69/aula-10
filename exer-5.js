async function exibirInfoCep(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao conectar com ViaCEP");
      }
      const dados = await response.json();
      
      if (dados.erro) {
        throw new Error("CEP não encontrado.");
      }
  
      console.log(`CEP: ${cep}, Logradouro: ${dados.logradouro}, Bairro: ${dados.bairro}, Cidade: ${dados.localidade}, UF: ${dados.uf}`);
    } catch (erro) {
      console.error("Erro:", erro.message);
    }
  }
  
  // Testes
  exibirInfoCep("01001000"); // Válido
  exibirInfoCep("abc");      // Inválido
  exibirInfoCep("99999999"); // Válido formato mas inexistente
  