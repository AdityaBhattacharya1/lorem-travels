import React from "react"
import IntroSection from "./IntroSection"
import { introData } from "../data/introData"

function SectionContainer() {
  return (
    <section role="contentinfo">
      {/* Phantom h2 tag to comply with section tag "rules" and improve SEO (albeit by an infinitesimal amount) */}
      <h2 id="how-it-works"> </h2>
      {introData.map(({ id, title, text }) => {
        return (
          <React.Fragment key={id}>
            <IntroSection title={title} text={text} />
            <hr />
          </React.Fragment>
        )
      })}
    </section>
  )
}

export default SectionContainer
