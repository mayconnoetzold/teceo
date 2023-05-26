/// <reference types="cypress" />
import '@bahmutov/cy-api'
import loja from "../support/pages/loja/index"

describe('Cadastro loja', () => {
  it('Validação fluxo de cadastro da loja', () => {
    // test
    loja.cadastroLoja()
  })
})