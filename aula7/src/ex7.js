
//Exercício 7
nros = prompt("Entre com os números separados por vírgula:");
nros = nros.split(",");

for(i =0; i < nros.length; i+=2){
    console.log(nros[i]);
}