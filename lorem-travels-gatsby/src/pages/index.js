import React from "react"
import "../styles/global.css"
import SectionContainer from "../components/homeDesc/SectionContainer"
import Layout from "../components/Layout"
import Heading from "../components/homeDesc/Heading"
import ImageContainer from "../components/homeDesc/ImageContainer"

export default function Home() {
  return (
    <Layout>
      <Heading />
      {/* 
          since the static image takes up space and prevents heading and the section container from sticking together,
          we return an empty div. If null, react fragment or undefined is returned, then there would be no component
          to style and the two sections would clash on smaller screens.
      */}

      <ImageContainer />
      <SectionContainer />
    </Layout>
  )
}
