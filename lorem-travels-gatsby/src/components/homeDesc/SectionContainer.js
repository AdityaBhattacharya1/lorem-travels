import React from "react"
import IntroSection from "./IntroSection"
import { introData } from "../data/introData"

function SectionContainer() {
  return (
    <div>
      <div id="how-it-works"></div>
      {introData.map(({ id, title, text }) => {
        return (
          <div key={id}>
            <IntroSection title={title} text={text} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default SectionContainer
