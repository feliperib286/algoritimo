const fs = require('fs'); // Módulo para manipulação de arquivos

const caminho = './src/livros.txt';

function txtToArray() {
    try {
        // Leitura do arquivo como texto
        const conteudo = fs.readFileSync(caminho, 'utf-8');
        
        // Quebra conteúdo em linhas usando o caractere de nova linha
        const linhas = conteudo.split('\r\n');
        
        // Descarta a primeira linha e processa as demais
        const livros = linhas.slice(1) // Ignora a primeira linha
            .filter(linha => linha.trim() !== '') // Remove linhas vazias
            .map(linha => {
                const [disciplina, titulo, autor, editora, ano] = linha.split('$');
                return { disciplina, titulo, autor, editora, ano };
            });

        return livros;
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
        return [];
    }
}

// Exporta a função
module.exports = txtToArray;
