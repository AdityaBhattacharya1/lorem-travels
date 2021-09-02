describe("Home page tests", () => {
  beforeEach(() => cy.visit("/"))

  it("Should check if home page button works", () => {
    cy.get("#gatsby-focus-wrapper > div > div > main > button > span.MuiButton-label").click({
      force: true,
    })
    // wait 1.5 seconds to facilitate for page transition animation.
    cy.wait(2000)
    cy.location().should(location => {
      expect(location.hash).to.be.empty
      expect(location.host).to.eq("localhost:8000")
      expect(location.hostname).to.eq("localhost")
      expect(location.origin).to.eq("http://localhost:8000")
      expect(location.pathname).to.eq("/pricing")
      expect(location.port).to.eq("8000")
      expect(location.protocol).to.eq("http:")
      expect(location.search).to.be.empty
    })
  })

  const mobileDisplays = [
    "iphone-4",
    "iphone-5",
    "iphone-6",
    "iphone-6+",
    "iphone-7",
    "iphone-8",
    "iphone-x",
    "iphone-xr",
    "iphone-se2",
    "ipad-2",
    "ipad-mini",
    "iphone-3",
    "iphone-4",
    "samsung-note9",
    "samsung-s10",
  ]

  mobileDisplays.forEach(size => {
    it(`Should not display hero image on ${size}`, () => {
      cy.viewport(size)

      cy.get("#gatsby-focus-wrapper > div > div > main > aside > div").should(
        "not.be.visible"
      )
    })
  })

  const largeDisplays = [
    [3840, 2160],
    [3440, 1440],
    [2560, 1440],
    [1920, 1080],
    [1920, 1200],
    [1600, 900],
    [1366, 768],
    [1280, 1034],
  ]

  largeDisplays.forEach(size => {
    it(`Should display hero image on ${size[0]} x ${size[1]} screens`, () => {
      cy.viewport(size[0], size[1])

      cy.get("#gatsby-focus-wrapper > div > div > main > aside > div").should(
        "be.visible"
      )
    })
  })
})
