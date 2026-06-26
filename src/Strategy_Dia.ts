//Aqui vou ter que colocar as abstrações

export enum Prioridade {
  ALTA = "ALTA",
  MEDIA = "MÉDIA",
  BAIXA = "BAIXA",
}//Pedido na atividade

export interface DiaStrategy {
  execute(user: string, extra: string): string;
  getPriority(): Prioridade;
}
//Padrão: Strategy — abstração base para todos os comportamentos