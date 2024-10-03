// Exercício 5
nros = prompt("Entre com os números separados por vírgula:");
nros = nros.split(",");
soma = 0;
for(i =0; i < nros.length; i++){
    soma = soma + parseInt(nros[i]);
}
console.log("Somatório:", soma);