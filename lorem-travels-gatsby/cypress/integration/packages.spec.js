describe("Tour packages test", () => {
  before(() => {
    cy.visit("http://localhost:8000/pricing")
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
    // If we are able to find the .back-to-pricing tag, it obviously
    // means that a page for the package has been dynamically generated.
    cy.get(".back-to-pricing").click({ force: true })
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
