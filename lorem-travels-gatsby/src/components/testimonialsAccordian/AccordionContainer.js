import { Typography } from "@material-ui/core"
import React from "react"
import AccordionTemplate from "./AccordionTemplate"
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { testimonialsData } from "../data/testimonialsData"

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
})

function AccordionContainer() {
  const classes = useStyles()
  return (
    <div id="testimonials">
      <Typography variant="h3" className={classes.heading}>
        Our Testimonials
      </Typography>
      {testimonialsData.map(({ id, title, details }) => {
        return <AccordionTemplate key={id} title={title} details={details} />
      })}
    </div>
  )
}

export default AccordionContainer
