console.log("Exercício 2");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Função para procurar livros por título e exibir as disciplinas correspondentes
function procurarLivrosPorTítulo(titulo) {
    // Filtra os livros que correspondem ao título fornecido (case-insensitive)
    const livrosEncontrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(titulo.toLowerCase()) // Caso o título tenha a palavra fornecida
    );

    if (livrosEncontrados.length > 0) {
        console.log(`Livros encontrados com o título "${titulo}":`);
        livrosEncontrados.forEach(livro => {
            console.log(`
Título: ${livro.titulo}
Disciplina: ${livro.disciplina}
`);
        });
    } else {
        console.log(`Nenhum livro encontrado com o título "${titulo}".`);
    }
}

// Verifica se há um argumento na linha de comando
const titulo = process.argv[2]; // Captura o argumento do título

if (!titulo) {
    // Se o título não for fornecido como argumento, pede ao usuário para digitar o título
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('É necessário fornecer o título do livro: ', (tituloInput) => {
        // Chama a função com o título fornecido pelo usuário
        procurarLivrosPorTítulo(tituloInput);
        
        // Fecha a interface do readline após a consulta
        rl.close();
    });
} else {
    // Se o título for fornecido via argumento, chama a função de pesquisa
    procurarLivrosPorTítulo(titulo);
}
