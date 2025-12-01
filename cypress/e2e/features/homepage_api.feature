Feature: Validar API da homepage
  Como visitante do site
  Quero garantir que a homepage responde corretamente
  Para assegurar estabilidade de acesso

  Scenario: Resposta HTTP da homepage
    Given que acesso a API da homepage
    Then o status da resposta deve ser 200
    And o Content-Type deve conter "text/html"
    And o corpo não deve conter erros

  Scenario: Resposta negativa para caminho inexistente
    Given que acesso a API inválida "/nao-existe-abc"
    Then o status da resposta não deve ser 200
    And o URL da resposta deve conter "/nao-existe-abc"
