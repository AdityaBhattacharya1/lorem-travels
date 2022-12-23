import React from "react"
import { Partytown } from "@builder.io/partytown/react"

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <Partytown key="partytown" debug={false} forward={["dataLayer.push"]} />,
    // Substitute your link here. Alternatively, you could comment the script tag below to completely disable analytics
    <script
      data-goatcounter="https://adityabhattacharya1.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
      key="GoatCounter"
    />,
    // A bit more data collection (1984 🤯🤯) */
    <script async src="https://cdn.splitbee.io/sb.js" key="SplitBee" />,
  ])
}
