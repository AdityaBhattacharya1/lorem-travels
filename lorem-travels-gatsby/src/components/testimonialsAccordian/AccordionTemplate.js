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
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function AccordionTemplate({ title, details }) {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Accordion style={{ backgroundColor: "#FEF5DD" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="testimonial-panel-content"
          id="testimonial-panel-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontFamily: "Poppins", fontWeight: 600, color: "#04295c" }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontFamily: "Poppins", color: "#04295c" }}>
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}
