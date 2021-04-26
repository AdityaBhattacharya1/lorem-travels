import React from "react"

import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

import SectionContainer from "../components/homeDesc/SectionContainer"
import Layout from "../components/Layout"
import Heading from "../components/homeDesc/Heading"

import { useMediaQuery } from "react-responsive"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })
  return (
    <Layout>
      <Heading />

      {/* TODO: make this responsive by adding media queries */}
      {/* Note to self: it was a horror dealing with this plugin. If media queries don't work, use gatsby-image plugin instead. */}
      {(isDesktopOrLaptop || isBigScreen) && (
        <StaticImage
          src="../images/house-img.webp"
          alt="Home image"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            position: "absolute",
            top: "10%",
            right: "0%",
            zIndex: -1,
            opacity: 0.7,
          }}
        />
      )}
      {(isTabletOrMobile || isPortrait || isRetina) && null}

      <SectionContainer />
    </Layout>
  )
}
