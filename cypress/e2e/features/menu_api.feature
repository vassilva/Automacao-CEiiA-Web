Feature: Validar API de navegação do menu
  Como visitante do site
  Quero garantir que páginas do menu respondem corretamente
  Para assegurar estabilidade de navegação

  Scenario Outline: Resposta HTTP das páginas do menu
    Given que acesso a API da página "<label>"
    Then o status da resposta deve ser 200
    And o URL da resposta deve conter "<path>"

    Examples:
      | label       | path          |
      | Mobility    | /mobility     |
      | Aeronautics | /aeronautics  |
