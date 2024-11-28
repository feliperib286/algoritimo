console.log("Exercício 4");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Função para encontrar o livro com o título mais curto
function livroComMenorTitulo() {
    // Inicializa uma variável para armazenar o livro com o título mais curto
    let livroMenorTitulo = livros[0];

    // Percorre todos os livros para encontrar o título mais curto
    for (let livro of livros) {
        if (livro.titulo.length < livroMenorTitulo.titulo.length) {
            livroMenorTitulo = livro;
        }
    }

    // Imprime os dados do livro com o título mais curto
    console.log("Livro com o título mais curto:");
    console.log(`
Título: ${livroMenorTitulo.titulo}
Autores: ${livroMenorTitulo.autor}
Editora: ${livroMenorTitulo.editora}
Ano: ${livroMenorTitulo.ano}
`);
}
/*
// Chama a função para imprimir o livro com o título mais curto
livroComMenorTitulo();
console.log("Exercício 4");
// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Função para encontrar o livro com o título mais extenso
function livroComTituloMaisExtenso() {
    // Inicializa uma variável para armazenar o livro com o título mais longo
    let livroMaisExtenso = livros[0];

    // Percorre todos os livros para encontrar o título mais longo
    for (let livro of livros) {
        if (livro.titulo.length > livroMaisExtenso.titulo.length) {
            livroMaisExtenso = livro;
        }
    }

    // Imprime os dados do livro com o título mais extenso
    console.log("Livro com o título mais extenso:");
    console.log(`
Título: ${livroMaisExtenso.titulo}
Autores: ${livroMaisExtenso.autor}
Editora: ${livroMaisExtenso.editora}
Ano: ${livroMaisExtenso.ano}
`);
}

// Chama a função para imprimir o livro com o título mais extenso
livroComTituloMaisExtenso();*/
