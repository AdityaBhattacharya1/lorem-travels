import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded"
import PricingBtn from "../components/pricingPage/PricingBtn"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded"
import Helmet from "react-helmet"
import { useMediaQuery } from "react-responsive"

const TextContainer = styled.article`
  font-family: "Poppins";
  padding: 15px;

  p {
    padding: 15px;
  }

  img {
    box-shadow: 5px 5px 20px #888888;
  }

  h1,
  h2,
  h3 {
    padding-top: 25px;
    padding-bottom: 10px;
    font-weight: bold;
  }

  &:last-child {
    padding-bottom: 25px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.5rem;

    h1,
    h2,
    h3 {
      font-size: 2.5rem;
    }
  }
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
})

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, price, thumb, priceURL } = data.markdownRemark.frontmatter
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1920px)" })

  // defined inside component because of use of local variable `thumb`
  const StyledHeader = styled.header`
    font-size: 2rem;
    color: white;
    font-family: "Poppins";
    padding-bottom: 30px;
    padding-left: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${thumb}) no-repeat center;
    background-size: cover;

    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }

    @media screen and (min-width: 1920px) {
      font-size: 3rem;
    }
  `
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - Lorem Travels`}</title>
      </Helmet>
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
        }}
        className="back-to-pricing"
      >
        <ArrowBackIosRoundedIcon style={{ fontSize: "13px" }} /> Back to Pricing
        & Packages
      </AniLink>
      <article>
        <StyledHeader>
          <ThemeProvider theme={theme}>
            <PricingBtn
              price={price}
              priceURL={priceURL}
              variant="outlined"
              size={isExtraLargeScreen ? 1 : 2}
              icon={<ShoppingBasketRoundedIcon />}
            />
          </ThemeProvider>
          <h2>{price}</h2>
          <h1>{title}</h1>
        </StyledHeader>
        <TextContainer dangerouslySetInnerHTML={{ __html: html }} />
        {/* ↑ This is not a problem since we are injecting .md as html. So, any attempts of XSS should get parsed as markdown text */}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query template($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumb
        price
        priceURL
      }
      html
    }
  }
`
