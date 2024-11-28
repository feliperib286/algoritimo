// Pega os argumentos a partir do índice 2
const args = process.argv.slice(2); 

if (args.length > 0) {
  const param = args[0];
  console.log(`Parâmetro recebido: ${param}`);
} else {
  console.log("Nenhum parâmetro foi passado.");
}