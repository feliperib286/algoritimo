// Exercício 6
function somatorio(nros){
    i = 0;
    soma = 0;
    while( i < nros.length ){
        soma = soma + nros[i];
        i = i + 1;
    }
    return soma;
}

numeros = [8,3,4,7,5];
s = somatorio(numeros);
console.log("Somatório:", s);

numeros = [5,4,3];
s = somatorio(numeros);
console.log("Somatório:", s);