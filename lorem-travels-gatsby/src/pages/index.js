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
      <ImageContainer />
      <SectionContainer />
    </Layout>
  )
}
