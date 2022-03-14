import React from "react"
import PricingCard from "./PricingCard"
import Layout from "../Layout"
import { makeStyles, createTheme } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import AccordionContainer from "../testimonialsAccordian/AccordionContainer"
import { useStaticQuery, graphql } from "gatsby"

const theme = createTheme({})

const useStyles = makeStyles({
  heading: {
    paddingTop: "120px",
    textAlign: "center",
    color: "#000",
    fontWeight: 1000,
    fontFamily: "Merriweather",
    textDecoration: "underline",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
})

function PricingContainer() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
            thumb
            price
            desc
            priceURL
          }
          id
        }
      }
    }
  `)
  const packages = data.allMarkdownRemark.nodes
  const classes = useStyles()
  return (
    <Layout>
      <Typography className={classes.heading} variant="h2" role="heading">
        Our Packages
      </Typography>
      <Grid
        container
        className={classes.gridContainer}
        justifyContent="space-around"
      >
        {packages.map(({ frontmatter, id }) => {
          return (
            <Grid item xs={12} sm={6} md={4} xl={3} key={id}>
              <PricingCard
                title={frontmatter.title}
                details={frontmatter.desc}
                price={frontmatter.price}
                imgLink={frontmatter.thumb}
                articleLink={frontmatter.slug}
                priceURL={frontmatter.priceURL}
              />
            </Grid>
          )
        })}
      </Grid>
      <AccordionContainer />
    </Layout>
  )
}

export default PricingContainer
