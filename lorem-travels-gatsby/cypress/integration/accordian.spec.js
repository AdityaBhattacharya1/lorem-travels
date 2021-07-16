describe("Accordion test", () => {
  before(() => {
    cy.visit("/pricing")
  })

  it("Should check if accordions open and close correctly", function () {
    cy.get(
      ":nth-child(2) > .MuiPaper-root > #testimonial-panel-header > .MuiAccordionSummary-content"
    )
      .click()
      .should("have.class", "Mui-expanded")
    cy.get(
      ":nth-child(2) > .MuiPaper-root > #testimonial-panel-header > .MuiAccordionSummary-content"
    )
      .click()
      .should("not.have.class", "Mui-expanded")
  })
})
