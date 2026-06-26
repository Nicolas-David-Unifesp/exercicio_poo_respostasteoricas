//Aqui tem que usar o padrão null-object

/*Pelo que vi, basicamente, o padrão de projeto Null_Object é 
quando há falta de estratégia de forma segura, ou seja, serve
para eliminar os null/undefined no código principal. */

import { DiaStrategy, Prioridade } from "./Strategy_Dia";

export class Null_Object_Strategy implements DiaStrategy{
    constructor(private readonly dialabel: string){}
    // serve para que o código interno não altere o valor depois de criado

    execute(_user: string, _extra: string): string {
    return `Nenhuma estratégia definida para "${this.dialabel}". Nada a fazer.`;
  }

    //Basicamente, quero garantir que seja imutável e seguro  
  getPriority(): Prioridade {
    return Prioridade.BAIXA;
  }
}