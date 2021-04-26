import React from "react"
import IntroSection from "./IntroSection"
import { introData } from "./IntroData"

function SectionContainer() {
  return (
    <div>
      <div id="how-it-works"></div>
      {introData.map(({ id, title, text }) => {
        return (
          <>
            <IntroSection key={id} title={title} text={text} />
            <hr />
          </>
        )
      })}
    </div>
  )
}

export default SectionContainer
