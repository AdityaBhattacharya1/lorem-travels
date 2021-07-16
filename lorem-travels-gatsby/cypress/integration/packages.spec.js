describe("Tour packages test", () => {
  before(() => {
    cy.visit("/pricing")
  })

  it("Should check if a page has been dynamically created for the packages", function () {
    cy.get(
      ":nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(2) > .MuiButton-label > a"
    ).click({ force: true })
    cy.location().should(location => {
      expect(location.hash).to.be.empty
      expect(location.host).to.eq("localhost:8000")
      expect(location.hostname).to.eq("localhost")
      expect(location.origin).to.eq("http://localhost:8000")
      expect(location.port).to.eq("8000")
      expect(location.protocol).to.eq("http:")
      expect(location.search).to.be.empty
    })
    // wait 2 seconds to facilitate for page transition animation.
    cy.wait(2000)

    /*
      In order to assert that a new page for the packages have been dynamically created, we check for 2 things:

      1. custom slug: If a custom slug has been created, it means that gatsby node worked successfully.

      2. Back to pricing page button: If the button is visible and functional, that means that the DOM has rendered successfully.

      3. Title of the page: If title is a match, that means the header tags have successfully loaded.
    */

    cy.get("#gatsby-focus-wrapper > div > div > main > article > header > h1")
      .invoke("text")
      .then(text => {
        cy.url().should("include", Cypress._.kebabCase(text))
        cy.title().should("include", text)
      })

    cy.get(".back-to-pricing").click({ force: true }) // forcing to be true since the link may get hidden under the navbar in which case the test will fail.
    cy.location().should(location => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq("http://localhost:8000/pricing")
      expect(location.host).to.eq("localhost:8000")
      expect(location.hostname).to.eq("localhost")
      expect(location.origin).to.eq("http://localhost:8000")
      expect(location.pathname).to.eq("/pricing")
      expect(location.port).to.eq("8000")
      expect(location.protocol).to.eq("http:")
      expect(location.search).to.be.empty
    })
  })
})
