import React from "react"
import PricingCard from "./PricingCard"
import Layout from "../Layout"
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import { pricingData } from "../data/pricingData"
import AccordionContainer from "../testimonialsAccordian/AccordionContainer"

const theme = createMuiTheme({})

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
  const classes = useStyles()
  return (
    <Layout>
      <Typography className={classes.heading} variant="h2">
        Our Packages
      </Typography>
      <Grid container className={classes.gridContainer} justify="space-around">
        {pricingData.map(({ id, title, details, price, imgLink }) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <PricingCard
                title={title}
                details={details}
                price={price}
                imgLink={imgLink}
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
