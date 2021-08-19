describe("Navigation Bar and Menu tests", () => {
  before(() => {
    cy.visit("/")
  })

  it("Should check if Navbar opens ", () => {
    cy.get(".styled-burger").click()
    cy.get(".styled-burger").should("have.attr", "open")
    cy.get(".styled-burger").click()
    cy.get(".styled-burger").should("not.have.attr", "open")
  })

  it("Should check if Navbar links are up", () => {
    const routes = ["", "#how-it-works", "pricing", "pricing/#testimonials"]
    routes.forEach(route => {
      cy.request(`/${route.path}`).should(response => {
        expect(response.status).to.eq(200)
      })
    })
  })

  it("Should check if Navbar links work", function () {
    cy.get(".styled-burger").click({ force: true })
    cy.get(".right-nav > :nth-child(1) > a").click({ force: true })
    cy.get(":nth-child(2) > a").click({ force: true })
    cy.get(":nth-child(3) > a").click({ force: true })
    cy.get(".styled-burger > :nth-child(2)").click({
      force: true,
    })
    cy.get(":nth-child(4) > a").click({ force: true })
    cy.get(".styled-burger").click({ force: true })
    cy.get(".right-nav > :nth-child(1) > a").click({ force: true })
    cy.go("back")
  })

  it("Should check if logo link works", () => {
    cy.visit("/pricing")
    cy.get(".logo").click()
    cy.location().should(location => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq(`${Cypress.env('prod_url')}/pricing`)
      expect(location.origin).to.eq(Cypress.env('prod_url'))
      expect(location.pathname).to.eq("/pricing")
      expect(location.protocol).to.eq("http:")
      expect(location.search).to.be.empty
    })
  })
})
