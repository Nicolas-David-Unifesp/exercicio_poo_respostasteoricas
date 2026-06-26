# Comportamento por Dia da Semana

O código faz o que é pedido na atividade: identificar o dia da semana e delegar a execução de uma ação para uma estratégia específica.

>Acredito que os padrões que possam ser utilizados sejam o strategy e null object

---

## Como fazer a instalação e a execução

>Seria basicamente fazer como se faz com qualquer código em typescript

```bash
npm install
npm start
#Para executar o programa de fato
```

## Papel de Cada Camada

| Arquivo | Papel Dele |
|---|---|
| `Strategy_Dia.ts` | Define o **contrato** que todas as estratégias devem respeitar |
| `Strategy_da_Semana.ts` | Implementa o comportamento real para Segunda a Domingo |
| `Null_Object_Strategy.ts` | Implementa o padrão **Null Object** |
| `Strategy_Seletor.ts` | Mapeia nomes de dias e índices numéricos às estratégias, sem `if/else` |
| `Main.ts` | Faz a interação com o usuário e dispara a estratégia selecionada |


## Questões Teóricas

### 1. Como evitar verificações repetidas de valores nulos no código principal?

É possível evitar esses tipos de verificações repetidas usando o padrão Null Object, que substitui checagens por null ou undefined ao retornar um objeto "vazio" que segue a mesma interface, permitindo ao código principal a execução do que precisa fazer diretamente e sem interrupções.

### 2. Qual padrão de projeto pode ser utilizado para representar a ausência de uma estratégia de forma segura?

O Null Object pode fazer isso, já que, ao invés de usar null, usa-se um objeto neutro com a mesma interface para que se execute uma ação de forma mais segura, pois evita erros de código.


### 3. Explique brevemente como esse padrão seria incorporado à solução.

No código o Strategy_Seletor usa o operador ?? para retornar a Null_Object_Strategy caso o mapa não encontre o dia. Isso faz com que que o Main.ts consiga executar os métodos diretamente e sem precisar de validações com if, que é justamente o que foi pedido no enunciado do exercício.

## Exemplo de Execução

## Entrada Válida

Comportamento por Dia da Semana

Seu nome: [Ana]
Tarefa / meta / informação adicional: [Implementar relatório]

Como deseja consultar o dia?
  1 — Usar o dia atual automaticamente
  2 — Informar o dia manualmente
Opção (1 ou 2): [2]
Digite o dia da semana: [quarta-feira]

=======================================================
Dia consultado : quarta-feira
Prioridade     : MÉDIA
Mensagem       : Olá, Ana! Dia de revisão: verifique o andamento da atividade "Implementar relatório".
=======================================================

## Entrada Inválida

Comportamento por Dia da Semana

Seu nome: [Ana]
Tarefa / meta / informação adicional: [Implementar relatório]

Como deseja consultar o dia?
  1 — Usar o dia atual automaticamente
  2 — Informar o dia manualmente
Opção (1 ou 2): [2]
Digite o dia da semana: [funday]

=======================================================
Dia consultado : funday
Prioridade     : BAIXA
Mensagem       : Nenhuma estratégia definida para "funday". Sem ação a executar.
======================================================= 