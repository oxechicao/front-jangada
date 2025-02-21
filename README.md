# Jangada Project

- [Jangada Project](#jangada-project)
  - [TODO](#todo)
  - [Funcionalidades](#funcionalidades)
    - [CRUDS](#cruds)
    - [Actions](#actions)
    - [Journey](#journey)
  - [Dados](#dados)

## TODO

```mermaid
mindmap
  Karteira
    Orçamento
      Valor máximo mensal
      Nova compra
        Verificar se passará tas metas
      Metas
        Valor desejado mensal
        Por categoria
    Categoria
      Tipos
        Forma de pagamento (A vista/parcelado)
        Cartões
        Departaments
    Cartões
      Limite
      Vencimento


```

## Funcionalidades

### CRUDS

- Despesas (core da aplicação)
- Cartão de crédito
  - Nome, vencimento, fechamento da fatura
  - Usado para alertar que alguma fatura está perto de vencer
  - Usado para alertar que fatura ainda não foi registrada como paga
- Teto de orçamento
  - Valor total de entradas
  - Informar quandos os gastos chegarem próximo ao teto
  - Informar quando passar do teto
- Meta de gastos
  - Diferente do teto de orçamento
    - Pois, aqui é uma meta que se pretende ter para gastos em geral
  - Usado para calcular uma previsão de compras
  - Pode ser dividido entre categorias
    - Por exemplo:
      - 4 mil de crédito (com a soma das compras em crédito)
      - 300 reais de assinaturas (soma das assinaturas, netflix, spotify etc)
      - 1000 de reservas de emergência (soma dos valores guardados)
- Previsão de compra
  - Valor da parcela
  - Quantidade de parcela
  - Indicar o melhor dia para efetuar a compra

### Actions

- Pagamento
  - Faz:
    - Incrementa as parcelas pagas
    - Se fechar parcelas faz highlight de que se encerrou
  - Tipos:
    - Tela por vencimentos
    - Tela por Cartões
    - Pagamento individual

### Journey

```mermaid

flowchart TD
  inicio((( Início )))
  inicio --> configCartao([Configurar Cartão])
  inicio --> configTeto([Configurar Teto
    no Orçamento])

  subgraph Cartao
    configCartao --> cartaoVencimento[Vencimento
      Cartão]
    configCartao --> cartaoNome[Nome do
      Cartão]
    configCartao --> cartaoMelhorDia[Melhor dia
      p/ compras]
  end

  subgraph Alertas
    cartaoVencimento --> cartaoVencimentoDia{É dia de
      vencimento do cartão}
    cartaoVencimentoDia --> | Sim +- 3 dias | infoVencimento([Informar cartão
      vencimento])
    cartaoVencimentoDia --> | Não | fimAlertas(((fim)))

    cartaoMelhorDia --> cartaoAlertaMelhorDia{É o melhor
      dia de compra?
      Fatura fechou?}
    cartaoAlertaMelhorDia --> |Sim| infoFaturaCartao([Informar fatura
      fechada. Solicitar
      pagamento])
    cartaoAlertaMelhorDia --> |Não| fimAlertas
  end
```

## Dados

```mermaid
erDiagram
  EXPENSES {
    uuid _id
    string name
    number value
    number currentInstallment
    number totalInstallments
    date purchaseDate
    date paymentDate
    date createdAt
    date updatedAt
    uuid[] tags
  }

  CARD {
    uuid _id
    string name
    uuif idTag FK
  }

  TAG {
    uuid _id
    string name
    uuid idCategory FK
  }

  CATEGORY {
    uuid _id
    string name
  }

  CATEGORIES {
    enum paymentMethod
    enum paymentForm
    enum paymentOrigin
    enum department
    enum creditCard
  }

  GOAL {
    uuid _id
    uuid idTags FK
  }

  USER {
    uuid _id
    string email
    string token
  }

  EXPENSES }|--|{ TAG : "bocado"
  CATEGORY ||--|| CATEGORIES : "tem um"
  TAG ||--|{ CATEGORY : "tem várias"
  CARD ||--|| TAG : "TAG ===     "
  GOAL }|--|{ TAG : "exceto department"

  USER ||--|{ EXPENSES : "possui"
  USER ||--|{ CATEGORY : "possui"
  USER ||--|{ TAG : "possui"
  USER ||--|{ GOAL : "possui"
```
