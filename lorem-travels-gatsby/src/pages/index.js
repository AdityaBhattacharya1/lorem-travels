import React from "react"

import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

import SectionContainer from "../components/homeDesc/SectionContainer"
import Layout from "../components/Layout"
import Heading from "../components/homeDesc/Heading"

export default function Home() {
  return (
    <Layout>
      <Heading />

      {/* TODO: make this responsive by adding media queries */}
      {/* Note to self: it was a horror dealing with this plugin. If media queries don't work, use gatsby-image plugin instead. */}
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
        layout="constrained"
        breakpoints={[480, 750, 1080, 1366, 1920]}
      />

      <SectionContainer />
    </Layout>
  )
}
