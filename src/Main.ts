//Aqui tem que rodar a main

import * as readline from "readline";
import { Seletor_Strategy} from "./Strategy_Seletor";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function printResult(
  dayLabel: string,
  priority: string,
  message: string
): void {
  console.log("\n" + "=".repeat(55));
  console.log(`Dia consultado : ${dayLabel}`);
  console.log(`Prioridade     : ${priority}`);
  console.log(`Mensagem       : ${message}`);
  console.log("=".repeat(55) + "\n");
}

async function main(): Promise<void> {
  console.log("\nComportamento por Dia da Semana\n");

  const user = (await ask("Seu nome: ")).trim() || "Usuário";
  const extra = (await ask("Tarefa / meta / informação adicional: ")).trim() || "sem informação";

  console.log("\nComo deseja consultar o dia?");
  console.log("  1 — Usar o dia atual automaticamente");
  console.log("  2 — Informar o dia manualmente");

  const choice = (await ask("Opção (1 ou 2): ")).trim();

  if (choice === "1") {
    const label = Seletor_Strategy.todayLabel();
    const strategy = Seletor_Strategy.forToday();
    printResult(label, strategy.getPriority(), strategy.execute(user, extra));
  } else if (choice === "2") {
    const day = (await ask("Digite o dia da semana: ")).trim();
    const strategy = Seletor_Strategy.forDay(day);
    printResult(day || "(vazio)", strategy.getPriority(), strategy.execute(user, extra));
  } else {
    console.log("\nOpção inválida. Encerrando.\n");
  }

  rl.close();
}

main().catch((err) => {
  console.error("Erro inesperado:", err);
  rl.close();
});