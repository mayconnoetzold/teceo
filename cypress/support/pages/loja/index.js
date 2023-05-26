const el = require("./elements").ELEMENTS

class loja {
  cadastroLoja() {
    cy.visit('/')
    cy.contains('de uma loja').click()
    cy.contains('quero comprar').should('be.visible')
    cy.contains('cadastrar').click()
    cy.contains('próximo').click()

    cy.api({
      url: `${Cypress.config().apiUrlExternal}validate-cnpj?cnpj=35738399000197`,
      method: 'GET'
    }).then((response) => {
      expect(response.status).eq(200)
      expect(response.duration).lessThan(230)
      expect(response.body)
        .to.have.property('companyName')
        .to.be.a('string')

      expect(response.body.cnpj)
        .to.have.lengthOf(14)
      expect(Object.keys(response.body.address)).to.have.lengthOf(8)
    })
  }
}

export default new loja()