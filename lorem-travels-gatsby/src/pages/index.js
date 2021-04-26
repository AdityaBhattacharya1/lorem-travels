import React from "react"

import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

import SectionContainer from "../components/homeDesc/SectionContainer"
import Layout from "../components/Layout"
import Heading from "../components/homeDesc/Heading"

import { useMediaQuery } from "react-responsive"

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  return (
    <Layout>
      <Heading />
      {!isTabletOrMobile ? (
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
      ) : null}

      <SectionContainer />
    </Layout>
  )
}
