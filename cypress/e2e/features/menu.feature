Feature: Validar navegação pelo menu lateral
  Como visitante do site
  Quero acessar páginas internas usando o menu lateral
  Para visualizar as áreas de atuação da CEiiA

  Scenario: Navegar para Mobility
    Given que estou na homepage
    When clico na opção "Mobility" no menu lateral
    Then devo ser redirecionado para a página "Mobility"
    And o URL deve conter "/mobility"

  Scenario: Navegar para Aeronautics
    Given que estou na homepage
    When clico na opção "Aeronautics" no menu lateral
    Then devo ser redirecionado para a página "Aeronautics"
    And o URL deve conter "/aeronautics"

  Scenario: Navegar de Aeronautics para Home Page
    Given que estou na opção "Aeronautics"
    And quero voltar para homepage
    When clico no logotipo "CEiiA"
    Then devo ser direcionado a homepage
    And o URL exibida deve ser o da página inicial
    And o conteúdo principal deve ser visível
