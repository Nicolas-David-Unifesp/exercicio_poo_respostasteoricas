import { Prioridade } from "./Strategy_Dia";
import { DiaStrategy } from "./Strategy_Dia";

export class SegundaStrategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Segunda é hora de organizar suas prioridades. O que importa essa semana é "${extra}".`;
  }

  getPriority(): Prioridade {
    return Prioridade.ALTA;
  }
}

export class TercaStrategy implements DiaStrategy{
    execute(user: string, extra: string): string {
    return `Olá, ${user}! Agora é terça avance nas tarefas pendentes. Foque em: "${extra}".`;
  }

  getPriority(): Prioridade {
    return Prioridade.ALTA;
  }
}