describe("My First Test", () => {
  before(() => {
    cy.visit("http://localhost:8000")
  })

  it("Check if Navbar opens ", () => {
    cy.get(".styled-burger").click()
    cy.get(".styled-burger").should("have.attr", "open")
    cy.get(".styled-burger").click()
    cy.get(".styled-burger").should("not.have.attr", "open")
  })

  const routes = ["/", "/#how-it-works", "/pricing", "/pricing/#testimonials"]

  routes.forEach(route => {
    it("Check if Navbar links work", () => {
      cy.request(`http://localhost:8000${route}`).should(response => {
        expect(response.status).to.eq(200)
      })
    })
  })
})
