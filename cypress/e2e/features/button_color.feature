Feature: Validar cor do logo/btn CEiiA
  Como visitante do site
  Quero verificar a cor branca do logotipo CEiiA
  Para garantir conformidade visual no canto superior esquerdo

  Scenario: Logotipo CEiiA visível no canto superior esquerdo na cor branca
    Given que acesso a URL principal do CEiiA
    When a homepage for carregada
    Then o logotipo "CEiiA" deve estar visível no canto superior esquerdo na cor branca

