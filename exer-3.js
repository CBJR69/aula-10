fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao buscar posts");
    }
    return response.json();
  })
  .then(posts => {
    console.log(posts.slice(0, 5)); 
  })
  .catch(erro => {
    console.error("Erro:", erro.message);
  });
