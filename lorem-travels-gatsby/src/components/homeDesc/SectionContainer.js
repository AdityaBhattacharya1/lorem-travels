import React from "react"
import IntroSection from "./IntroSection"
import { introData } from "../data/introData"

function SectionContainer() {
  return (
    <div>
      <div id="how-it-works"></div>
      {introData.map(({ id, title, text }) => {
        return (
          <React.Fragment key={id}>
            <IntroSection title={title} text={text} />
            <hr />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SectionContainer
