/// Strategy selecionado via Map 
// Tem que encapsular a lógica de seleção e 
// retorna sempre um dia válido.

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
}

