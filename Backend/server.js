const express = require('express');
const app = express();


app.post('/livros', (req, res) => {
    // Obter os dados do livro do corpo da requisição
    const { isbn, titulo, autor, anoPublicacao, tema, alugado } = req.body;
  
    // Criar uma nova instância de livro com os dados recebidos
    const novoLivro = {
      isbn,
      titulo,
      autor,
      anoPublicacao,
      tema,
      alugado
    };
  
    // Salvar o livro em algum banco de dados ou em uma estrutura de dados em memória
  
    // Retornar uma resposta com o livro cadastrado
    res.json(novoLivro);
  });
  
  
  app.get('/livros', (req, res) => {
    // Recuperar todos os livros do banco de dados ou da estrutura de dados em memória
  
    // Retornar uma resposta com a lista de livros
    res.json(listaDeLivros);
  });
  
  
  app.get('/livros/:isbn', (req, res) => {
    // Obter o ISBN do livro da URL da requisição
    const isbn = req.params.isbn;
  
    // Procurar o livro com o ISBN especificado no banco de dados ou na estrutura de dados em memória
  
    // Se o livro for encontrado, retornar uma resposta com o livro encontrado
    // Se o livro não for encontrado, retornar uma resposta com uma mensagem de erro
  });
  

  app.put('/livros/:isbn', (req, res) => {
    // Obter o ISBN do livro da URL da requisição
    const isbn = req.params.isbn;
  
    // Obter os novos dados do livro do corpo da requisição
    const { titulo, autor, anoPublicacao, tema, alugado } = req.body;
  
    // Procurar o livro com o ISBN especificado no banco de dados ou na estrutura de dados em memória
  
    // Se o livro for encontrado, atualizar os campos com os novos dados recebidos
    // Se o livro não for encontrado, retornar uma resposta com uma mensagem de erro
  
    // Retornar uma resposta com o livro atualizado
    res.json(livroAtualizado);
  });
  

  app.delete('/livros/:isbn', (req, res) => {
    // Obter o ISBN do livro da URL da requisição
    const isbn = req.params.isbn;
  
    // Procurar o livro com o ISBN especificado no banco de dados ou na estrutura de dados em memória
  
    // Se o livro for encontrado, deletá-lo do banco de dados ou da estrutura de dados em memória
    // Se o livro não for encontrado, retornar uma resposta com uma mensagem de erro
  
    // Retornar uma resposta com uma mensagem de sucesso
    res.json({ mensagem: 'Livro deletado com sucesso' });
  });
  
  const port = 3000; // Escolha a porta que desejar

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
