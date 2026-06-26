//Aqui vou ter que colocar as abstrações

export enum Priority {
  ALTA = "ALTA",
  MEDIA = "MÉDIA",
  BAIXA = "BAIXA",
}//Pedido na atividade

export interface DayStrategy {
  execute(user: string, extra: string): string;
  getPriority(): Priority;
}
//Padrão: Strategy — abstração base para todos os comportamentos