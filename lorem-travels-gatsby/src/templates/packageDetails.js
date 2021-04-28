import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded"

// TODO: tidy this mess up. Have to set up better breakpoints for media queries.
const StyledDiv = styled.div`
  font-size: 2rem;
  color: white;
  margin-left: 40px;
  font-family: "Poppins";
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-100%, -100%);
  padding-bottom: 30px;

  @media screen and (max-width: 1320px) {
    font-size: 1.5rem;
    top: 45%;
    left: 50%;
    transform: translate(-100%, -100%);
    padding-bottom: 30px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
    top: 45%;
    left: 30%;
    transform: translate(-100%, -100%);
  }

  @media screen and (max-width: 930px) {
    font-size: 0.7rem;
    top: 35%;
    left: 30%;
    transform: translate(-100%, -100%);
  }

  @media screen and (max-width: 660px) {
    font-size: 0.7rem;
    top: 30%;
    left: 40%;
    transform: translate(-100%, -100%);
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    top: 20%;
    left: 50%;
    transform: translate(-100%, -110%);
  }

  @media screen and (max-width: 300px) {
    font-size: 0.7rem;
    top: 15%;
    left: 50%;
    transform: translate(-100%, -110%);
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: 600px;
  padding-bottom: 30px;
  filter: brightness(50%);
`

const TextContainer = styled.article`
  font-family: "Poppins";
  padding-right: 10px;
  padding-left: 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  &:last-child {
    padding-bottom: 10px;
  }
`

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, price, thumb } = data.markdownRemark.frontmatter
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
        <StyledImg src={thumb} alt="" />
        <StyledDiv>
          <h1>{title}</h1>
          <h2>{price}</h2>
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
