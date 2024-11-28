//importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Quantidade de elementos do array
console.log(`Quantidade de elementos: ${livros.length}`);

// 1o elemento do array
// Cada elemento do array é um JSON com as propriedades {disciplina,titulo,autor,editora,ano}
console.log(`1o elemento do array: 
    Disciplina: ${livros[0].disciplina}
    Título: ${livros[0].titulo}
    Autores: ${livros[0].autor}
    Editora: ${livros[0].editora}
    Ano: ${livros[0].ano}
`);