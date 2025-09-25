// Importa o módulo 'readline' para ler dados do terminal
const readline = require("readline");

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faz uma pergunta ao usuário e espera pela resposta
rl.question("Digite um numero: ", (resposta) => {
  // Converte a resposta (que é uma string) para um número
  const numero = Number(resposta);

  // Usa uma estrutura 'if-else' para verificar a condição
  if (numero > 5) {
    // Se a condição for verdadeira, executa este bloco de código
    console.log(numero, "é maior que 5");
  } else {
    // Se a condição for falsa, executa este outro bloco
    console.log(numero, "é menor ou igual a 5");
  }

  // Fecha a interface de leitura, encerrando o programa
  rl.close();
});