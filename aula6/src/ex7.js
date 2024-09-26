//Exercício 7
function inverter(lista){
    i = lista.length - 1;
    while( i >= 0 ){
        console.log(i, ":", lista[i]);
        i = i - 1;
    }
}

console.log("Lista:");
numeros = [8,3,4,7,5];
r = inverter(numeros);

console.log("Lista:");
numeros = [5,4,3];
inverter(numeros);