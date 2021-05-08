import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "10px 40px 20px 40px",
  },
  heading: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#04295c",
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  details: {
    fontFamily: "Poppins",
    color: "#04295c",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  },
  accordionContainer: {
    backgroundColor: "#FEF5DD",
    [theme.breakpoints.up("xl")]: {
      marginTop: "10px",
    },
  },
}))

export default function AccordionTemplate({ title, details }) {
  const classes = useStyles()

  return (
    <section
      className={classes.root}
      aria-label="Individual Testimonial"
      role="tree"
    >
      <Accordion className={classes.accordionContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="testimonial-panel-content"
          id="testimonial-panel-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.details}>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}
