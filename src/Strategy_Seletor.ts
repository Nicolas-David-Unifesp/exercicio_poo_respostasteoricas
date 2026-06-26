/// Strategy selecionado via Map 
// Tem que encapsular a lógica de seleção e 
// retorna sempre um dia válido.

import { Null_Object_Strategy } from "./Null_Object_Strategy";
import { Domingo_Strategy, Quarta_Strategy, Quinta_Strategy, Sabado_Strategy, Segunda_Strategy, Sexta_Strategy, Terca_Strategy } from "./Strategy_da_Semana";
import { DiaStrategy } from "./Strategy_Dia";

export class Seletor_Strategy {
    private static readonly DiaMap : Map<string, DiaStrategy> = new Map([
        ["segunda",       new Segunda_Strategy()],
        ["terça", new Terca_Strategy()],
        ["quarta", new Quarta_Strategy()],
        ["quinta",new Quinta_Strategy()],
        ["sexta", new Sexta_Strategy()],
        ["sabado", new Sabado_Strategy()],
        ["domingo", new Domingo_Strategy()],
    ]);

    // mapa para indice numerico
    private static readonly indexMap: Map<number, DiaStrategy> = new Map([
        [0, new Segunda_Strategy()],
        [1, new Terca_Strategy()],
        [2, new Quarta_Strategy()],
        [3,new Quinta_Strategy()],
        [4,new Sexta_Strategy()],
        [5,new Sabado_Strategy()],
        [6,new Domingo_Strategy()],
    ]);

    /** Retorna a estratégia para o dia atual automaticamente. */
  static forToday(): DiaStrategy {
    const dia_atual = new Date().getDay();
    // indexMap cobre todos os 7 dias, mas usamos ?? Null_Object_Strategy por robustez
    return this.indexMap.get(dia_atual) ?? new Null_Object_Strategy("dia desconhecido");
  }

  /** Retorna a estratégia para o nome de dia fornecido pelo user*/
  static forDay(day: string): DiaStrategy {
    const normalized = day.trim().toLowerCase();
    // Basicamente, nunca retorna undefined, mas um DiaStrategy seguro
    return this.DiaMap.get(normalized) ?? new Null_Object_Strategy(day);
  }

//Retorna o nome do dia
  static todayLabel(): string {
    const labels = [
      "domingo", "segunda-feira", "terça-feira",
      "quarta-feira", "quinta-feira", "sexta-feira", "sábado",
    ];
    return labels[new Date().getDay()];
  }
}

