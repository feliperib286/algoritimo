console.log("Exercício 1");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

// A função txtToArray retornará um array onde cada elemento é um JSON
const livros = txtToArray();

// Função para agrupar os livros por disciplina
const livrosPorDisciplina = livros.reduce((acc, livro) => {
    if (!acc[livro.disciplina]) {
        acc[livro.disciplina] = [];
    }
    acc[livro.disciplina].push(livro);
    return acc;
}, {});

// Função para procurar livros por disciplina no formato desejado
function procurarLivrosPorDisciplina(disciplina) {
    // Verifica se a disciplina existe no objeto
    if (livrosPorDisciplina[disciplina]) {
        console.log(`Livros encontrados para a disciplina "${disciplina}":`);
        livrosPorDisciplina[disciplina].forEach(livro => {
            console.log(`
Disciplina: ${livro.disciplina}
Título: ${livro.titulo}
Autores: ${livro.autor}
Editora: ${livro.editora}
Ano: ${livro.ano}
`);
        });
    } else {
        console.log(`Não existem livros da disciplina "${disciplina}".`);
    }
}

// Verifica se há um argumento na linha de comando
const disciplina = process.argv[2]; // Captura o argumento da disciplina

if (!disciplina) {
    // Se a disciplina não for fornecida como argumento, pede ao usuário para digitar a disciplina
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('É necessário fornecer o nome da disciplina: ', (disciplinaInput) => {
        // Chama a função com a disciplina fornecida pelo usuário
        procurarLivrosPorDisciplina(disciplinaInput);
        
        // Fecha a interface do readline após a consulta
        rl.close();
    });
} else {
    // Se a disciplina for fornecida via argumento, chama a função de pesquisa
    procurarLivrosPorDisciplina(disciplina);
}
