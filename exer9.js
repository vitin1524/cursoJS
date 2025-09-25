// --- Registro das Despesas ---

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let despesas = [];
let categorias = [
  "Moradia (Aluguel/Prestacao)",
  "Alimentacao (Supermercado/Feira)",
  "Transporte (Combustivel/Publico)",
  "Lazer (Passeios/Cinema)",
  "Contas (Luz, Agua, Internet, Telefone)",
  "Educacao (Mensalidade/Cursos)",
];

let nomesChaves = [
  "moradia",
  "alimentacao",
  "transporte",
  "lazer",
  "contas",
  "educacao",
];

let index = 0;

console.log("--- Registro de Despesas Pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nesta categoria.");

function perguntar() {
  if (index < categorias.length) {
    rl.question(`Valor de ${categorias[index]}: R$ `, (resposta) => {
        despesas[nomesChaves[index]] = parseFloat(resposta);
        index++;
        perguntar();
      });
  } else {
    mostrarResultados();
    rl.close();
  }
}

function mostrarResultados() {
  console.log("\n--- Despesas Registradas ---");
  for (const categoria in despesas) {
    if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
      console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
    } else {
      console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: Valor inválido`);
      despesas[categoria] = 0;
    }
  }
  console.log("----------------------------");

  let totalDespesas = 0;
  let numeroDeCategoriasComDespesa = 0;

  for (const categoria in despesas) {
    if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
      totalDespesas += despesas[categoria];
      if (despesas[categoria] > 0) {
        numeroDeCategoriasComDespesa++;
      }
    }
  }

  console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);
if (numeroDeCategoriasComDespesa > 0) {
  let mediaDespesas = totalDespesas / numeroDeCategoriasComDespesa;
  console.log(`Média de Despesas por Categoria com Gasto: R$ ${mediaDespesas.toFixed(2)}`);
} else {
  console.log("Nenhuma despesa registrada para calcular a média.");
}

console.log("====================================");

}

perguntar();