async function listarPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Erro ao buscar posts");
      }
      const posts = await response.json();
      console.log(posts.slice(0, 5)); 
    } catch (erro) {
      console.error("Erro:", erro.message);
    }
  }
  
  
  listarPosts();
  