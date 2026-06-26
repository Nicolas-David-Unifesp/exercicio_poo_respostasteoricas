import { Prioridade } from "./Strategy_Dia";
import { DiaStrategy } from "./Strategy_Dia";

export class Segunda_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Segunda é hora de organizar suas prioridades. O que importa essa semana é "${extra}".`;
  }

  getPriority(): Prioridade {
    return Prioridade.ALTA;
  }
}

export class Terca_Strategy implements DiaStrategy{
    execute(user: string, extra: string): string {
    return `Olá, ${user}! Agora é terça avance nas tarefas pendentes. Foque em: "${extra}".`;
  }

  getPriority(): Prioridade {
    return Prioridade.ALTA;
  }
}

export class Quarta_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Dia de revisão: verifique o andamento da atividade "${extra}".`;
  }
 getPriority(): Prioridade {
    return Prioridade.MEDIA;
  }
}

export class Quinta_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Quinta é dia de colaboração. Compartilhe seu progresso em "${extra}" com alguém da equipe.`;
  }
 getPriority(): Prioridade {
    return Prioridade.MEDIA;
  }
}

export class Sexta_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Sexta registre o que foi concluído. Conclusão desta semana: "${extra}".`;
  }
 getPriority(): Prioridade {
    return Prioridade.MEDIA;
  }
}

export class Sabado_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Sábado é seu! Aproveite para estudar ou descansar. Sugestão: "${extra}".`;
  }
 getPriority(): Prioridade {
    return Prioridade.BAIXA;
  }
}

export class Domingo_Strategy implements DiaStrategy {
  execute(user: string, extra: string): string {
    return `Olá, ${user}! Domingo: planeje a próxima semana. Pense sobre: "${extra}".`;
  }
 getPriority(): Prioridade {
    return Prioridade.BAIXA;
  }
}

/*Tive como base o exemplo que tinha sido colocado na atividade. */