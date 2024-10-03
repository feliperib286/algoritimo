// Solicita ao usuário que insira números separados por vírgulas
let nros = prompt("Entre com os números separados por vírgulas");

// Divide a string recebida em um array usando a vírgula como delimitador
let res = nros.split(",");

// Percorre cada elemento do array
for (let i = 0; i < res.length; i++) {
    // Converte o elemento atual para um número e remove espaços em branco
    let num = parseInt(res[i]);

    // Verifica se o número é par
    if (num % 2 == 0) {
        // Imprime o número par no console
        console.log(num);
    }
}
