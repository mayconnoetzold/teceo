/// <reference types="cypress" />

describe('Cadastro loja', () => {
  it('Validação fluxo de cadastro da loja', () => {
    cy.visit('/')
    cy.contains('de uma loja').click()

  });
});