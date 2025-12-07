Feature: Validar homepage do site CEiiA
  Como visitante do site
  Quero visualizar corretamente a homepage
  Para acessar o conteúdo institucional

  Scenario: Carregamento da homepage com sucesso
    Given que acesso a URL principal do CEiiA
    When a homepage for carregada
    Then o logotipo "CEiiA" deve estar visível no canto superior esquerdo
    And o menu lateral deve estar visível no canto superior direito
    And o banner principal deve ser exibido corretamente
    And nenhuma mensagem de erro deve aparecer na página

  Scenario: Permanecer na homepage ao clicar no logotipo
    Given que estou na homepage do CEiiA
    When clico no logotipo "CEiiA"
    Then não devo sair da homepage
    And o URL deve continuar sendo o da página inicial
    And o conteúdo principal deve permanecer visível
    And fecho as Configurações de cookies
