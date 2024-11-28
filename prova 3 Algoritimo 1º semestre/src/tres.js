console.log("Exercício 3");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Função para procurar livros por autor e exibir os detalhes correspondentes
function procurarLivrosPorAutor(autor) {
    // Filtra os livros que correspondem ao autor fornecido (case-insensitive)
    const livrosEncontrados = livros.filter(livro =>
        livro.autor.toLowerCase().includes(autor.toLowerCase()) // Caso o autor tenha a palavra fornecida
    );

    if (livrosEncontrados.length > 0) {
        livrosEncontrados.forEach(livro => {
            console.log(`
Título: ${livro.titulo}
Autores: ${livro.autor}
Editora: ${livro.editora}
Ano: ${livro.ano}
`);
        });
    } else {
        console.log(`Nenhum livro encontrado para o autor "${autor}".`);
    }
}

// Verifica se há um argumento na linha de comando
const autor = process.argv[2]; // Captura o argumento do autor

if (!autor) {
    // Se o autor não for fornecido, pede ao usuário para digitar o nome
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('É necessário fornecer o nome do autor: ', (autorInput) => {
        // Chama a função com o autor fornecido pelo usuário
        procurarLivrosPorAutor(autorInput);
        
        // Fecha a interface do readline após a consulta
        rl.close();
    });
} else {
    // Se o autor for fornecido via argumento, chama a função de pesquisa
    procurarLivrosPorAutor(autor);
}
