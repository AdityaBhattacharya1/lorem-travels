import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded"

const TextContainer = styled.article`
  font-family: "Poppins";
  padding: 15px;

  h1,
  h2,
  h3 {
    padding-top: 25px;
    padding-bottom: 10px;
  }

  &:last-child {
    padding-bottom: 10px;
  }
`

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, price, thumb } = data.markdownRemark.frontmatter
  const StyledDiv = styled.div`
    font-size: 2rem;
    color: white;
    font-family: "Poppins";
    padding-bottom: 30px;
    padding-left: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    height: 700px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${thumb}) no-repeat center;
    background-size: cover;

    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  `
  return (
    <Layout>
      <AniLink
        cover
        direction="right"
        bg="#A08A83"
        duration={1}
        to="/pricing"
        style={{
          paddingTop: "50px",
          position: "absolute",
          margin: "20px",
          zIndex: "100",
        }}
      >
        <ArrowBackIosRoundedIcon style={{ fontSize: "13px" }} /> Back to Pricing
        & Packages
      </AniLink>
      <div>
        {/* <StyledImg src={thumb} alt="" /> */}
        <StyledDiv>
          <h2>{price}</h2>
          <h1>{title}</h1>
        </StyledDiv>
        <TextContainer dangerouslySetInnerHTML={{ __html: html }} />
        {/* ↑ This is not a problem since we are injecting .md as html. So, any attempts of XSS will get parsed as markdown text */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query template($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        thumb
        price
      }
      html
    }
  }
`
